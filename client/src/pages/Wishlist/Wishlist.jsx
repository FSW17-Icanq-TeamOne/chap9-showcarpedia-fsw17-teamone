import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Show from "../../components/Collection/card";
import MainNavbar from "../../components/NavigationBar/MainNavbar";

export default function Wishlist() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
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
      setData(data?.map(datum => datum.Product))
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainNavbar />
      </Grid>
      <Grid item xs={12}>
        <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12}> 
          <Typography variant="h4">Wishlist</Typography>
          <Typography>{data.length} item</Typography>
          </Grid>
          {data.length?(
            data.map((datum, idx) => (
              <Grid item xs={4} sm={4} md={4} key={idx}>
                <Show data={datum} wishlist={datum} />
              </Grid>
            ))
          ):(
            <Grid item xs={12}>
            <Typography variant="h4">you dont have any wishlist</Typography>
            <Button component={Link} to='/collection'>find product here</Button>
            </Grid>
          )}
          
        </Grid>
      </Container>
      </Grid>
    </Grid>
  );
}
