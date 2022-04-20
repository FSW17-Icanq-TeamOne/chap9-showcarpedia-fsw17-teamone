import {
  Container,
  Grid,
  Divider
} from "@mui/material";
import { useState , useEffect } from "react";
import Show from "../components/card";
import Filter from "../components/Filter";
import MainNavbar from "../components/MainNavbar";

export default function Collection() {
 const [data,setData] = useState([])
 
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

 useEffect(()=> {
   fetchData()
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
           <Show data={datum} />
         </Grid>
        ))}


      </Grid>
      </Container>
      
    </>
  );
}
