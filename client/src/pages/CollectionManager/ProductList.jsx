import React from "react";
import { Grid,  Box } from "@mui/material";
import DashboardAdmin from "../../components/Dashboard/DashboardAdmin";
import ProductTable from "../../components/CollectionManager/ProductTable";

export default function ProductList() {
  return (
    <Grid container>
      <DashboardAdmin />
      <Grid item xs>
        <Box sx={{ minHeight: "calc(100vh - 64px)", m: 2 }}>
          <Grid container display={'flex'} justifyContent={'center'} marginTop={'40px'}>
              <ProductTable />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
