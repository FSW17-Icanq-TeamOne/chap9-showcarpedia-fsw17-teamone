import { Typography } from "@mui/material";
import { Container, Grid, Divider } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Show from "../components/card";
import Filter from "../components/Filter";
import MainNavbar from "../components/MainNavbar";
import "../styles/HomePage.css";

export default function FilterCollection() {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState([]);

  const query = useQuery();
  const allQuery = useMemo(() => {
    return Object.fromEntries(query);
  }, [query]);
  console.log(allQuery);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/v1/cars/search?mileages=${allQuery.mileages}&minYear=${allQuery.minYear}&grade=${allQuery.grade}&brand=${allQuery.brand}&category=${allQuery.category}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        console.log(Array.isArray(data));
        if (Array.isArray(data)) {
          setIsValid(true);
          setData(data);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [allQuery]);

  return (
    <>
      <MainNavbar />

      {/* Filter */}
      <Filter />

      {/* divider  */}

      <Divider variant="middle" />

      {/* Collection List */}
      <Container>
        <Typography variant="subtitle1" color="#91959B" mt={3}>
          showing {data.length} result
        </Typography>
        <Grid
          paddingTop={3}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent={!isValid?"center":"none"}
        >
          {!isValid ? (
            <Grid item justifyContent="center">
               <Typography variant="h6">Oops, product not found :(</Typography>
            </Grid>
           
          ) : (
            data.map((datum, idx) => (
              <Grid item xs={4} sm={4} md={4} key={idx}>
                <Show data={datum} />
              </Grid>
            ))
          )}

          {/* {data.map((datum, idx) => (
            <Grid item xs={4} sm={4} md={4} key={idx}>
              <Show data={datum} />
            </Grid>
          ))} */}
        </Grid>
      </Container>
    </>
  );
}