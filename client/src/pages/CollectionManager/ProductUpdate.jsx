import { Box, Grid, Typography } from "@mui/material";
import DashboardAdmin from "../../components/Dashboard/DashboardAdmin";

import ProductUpdateForm from "../../components/CollectionManager/ProductUpdateForm";

export default function ProductUpdate() {
  return (
    <Grid container>
      <DashboardAdmin />
      <Grid item xs>
        <Box sx={{ minHeight: "calc(100vh - 64px)", m: 2 }}>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            marginTop={"40px"}
          >
            <Typography variant="h4" mb={2} textAlign="center">
              Edit Product
            </Typography>
            <ProductUpdateForm />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
