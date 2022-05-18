import { Typography } from "@mui/material";
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import ProductCreationForm from "../components/ProductCreationForm";
import DashboardAdmin from "../components/Dashboard/DashboardAdmin";

export default function ProductCreation() {
  return (
    <Grid container>
      <DashboardAdmin />
      <Grid item xs>
        <Card sx={{ minHeight: "calc(100vh - 64px)" }}>
          <CardContent>
            <Typography variant="h4" mb={2} textAlign="center">
              Create New Product
            </Typography>
            <ProductCreationForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
