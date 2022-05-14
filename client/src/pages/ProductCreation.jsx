import { Grow } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, CardContent, Grid, Box } from "@mui/material";
import React,{ useState } from "react";
import AdminDashboardSidebar from "../components/AdminDashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ProductCreationForm from "../components/ProductCreationForm";

export default function ProductCreation() {
  const [isToggle, setIsToggle] = useState(true);
  const Component = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
       < AdminDashboardSidebar />
      </div>
    );
  })
  const handleToggle = (e) => {
    setIsToggle(e);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <DashboardNavbar toggle={handleToggle} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{display:isToggle ? "none" : "unset"}}
          >
            <Grow in={!isToggle}>
                <Component />
            </Grow>     
          </Grid>
          <Grid item xs={isToggle ? 12 : 10}>
            <Card sx={{minHeight:"calc(100vh - 64px)"}}>
              <CardContent>
                <Typography variant="h4" mb={2} textAlign="center">
                  Create New Product
                </Typography>
                <ProductCreationForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
