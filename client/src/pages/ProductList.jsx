import { Grow } from "@mui/material";
import React,{ useState } from "react";
import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import Dashboard from "../components/Dashboard";

import ProductTable from "../components/ProductTable";

export default function ProductList() {
  return (
    <Grid container>
      <Dashboard />
      <Grid item xs>
        <Card sx={{ minHeight: "calc(100vh - 64px)" }}>
          <CardContent>
            <ProductTable />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
