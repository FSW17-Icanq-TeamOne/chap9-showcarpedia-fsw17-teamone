import {
  Container,
  Grid,
  Divider
} from "@mui/material";
import { useState , useEffect } from "react";
import Show from "../../components/Collection/card";
import Filter from "../../components/Collection/Filter";
import MainNavbar from "../../components/NavigationBar/MainNavbar";

export default function Collection() {
 const [data,setData] = useState([])
 const [wishlistData,setWishlistData] = useState([])
 const fetchData = async () => {
  const response = await fetch("http://localhost:4000/v1/cars", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  const data = await response.json()

  setData(data)
 }

 const fetchWishlistData = async () => {
  const response = await fetch("http://localhost:4000/v1/wishlist", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    
  });
  const data = await response.json();
  if(Array.isArray(data)){
    setWishlistData(data?.map(datum => datum.Product))
  } 
};

 useEffect(()=> {
   fetchData()
 },[])

useEffect(()=>{
  fetchWishlistData()
},[])

  return (
    <>
      <MainNavbar />

      {/* Filter */}
      <Filter />

     {/* divider  */}

     <Divider variant="middle"/>

      {/* Collection List */}
      <Container>
      <Grid
      paddingTop={5}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((datum, idx) => (
           <Grid item xs={4} sm={4} md={4} key={idx}>
           <Show data={datum} wishlist={wishlistData?.find(data=>data.id === datum.id)} />
         </Grid>
        ))}


      </Grid>
      </Container>
      
    </>
  );
}
