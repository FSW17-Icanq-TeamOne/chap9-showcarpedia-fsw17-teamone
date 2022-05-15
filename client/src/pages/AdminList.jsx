import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";
import AdminTable from "../components/AdminTable";
import { AdminSidebar } from "../components/AdminDashboardSidebar";
import { useState } from "react";
import { Grow } from "@mui/material";
import Dashboard from "../components/Dashboard";

export default function AdminList() {

  return (
    <Grid container>
        <Dashboard />
        <Grid item xs>
        <Card sx={{ minHeight: "calc(100vh - 64px)" }}>
          <CardContent>
        
            <AdminTable />
          </CardContent>
        </Card>
      </Grid>

      
    </Grid>
  );
}
