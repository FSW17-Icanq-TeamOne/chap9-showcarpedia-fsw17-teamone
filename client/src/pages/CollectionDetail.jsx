import MainNavbar from "../components/MainNavbar";
import { Grid, Typography, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Details from "../components/cardDetail";

export default function DetailProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(
      `http://localhost:4000/v1/cars/details/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.ok) {
      const data = await response.json();
       setData(data)
    }
  };

  useEffect(() => {
    fetchdata()
  },[]);
  return (
    <>
      <Grid>
        <MainNavbar />
      </Grid>
      <Grid>
        <Details  data={data} />
      </Grid>
    </>
  );
}