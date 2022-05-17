import { Grid } from "@mui/material";
import { useState } from "react";
import MainNavbar from "../components/MainNavbar";

export default function Wishlist() {
    const [data,setData] = useState([])
    
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainNavbar />
      </Grid>
      <Grid item xs={12}>
          <Grid container spacing={2}>

          </Grid>
      </Grid>
    </Grid>
  );
}
