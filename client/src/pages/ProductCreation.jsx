import { Typography } from "@mui/material";
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import ProductCreationForm from "../components/ProductCreationForm";
import Dashboard from "../components/Dashboard";

export default function ProductCreation() {
  return (
    <Grid container>
      <Dashboard />
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
