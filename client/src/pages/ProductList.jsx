import { Grow } from "@mui/material";
import React,{ useState } from "react";
import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardAdmin from "../components/Dashboard/DashboardAdmin";

import ProductTable from "../components/ProductTable";

export default function ProductList() {
  return (
    <Grid container>
      <DashboardAdmin />
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
