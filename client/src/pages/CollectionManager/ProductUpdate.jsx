import { Card, CardContent, Grid, Typography } from "@mui/material";
import DashboardAdmin from "../../components/Dashboard/DashboardAdmin";

import ProductUpdateForm from "../../components/CollectionManager/ProductUpdateForm";

export default function ProductUpdate() {
    return (
    <>
        <Grid container >
                <DashboardAdmin />

        <Grid item xs>
            <Card  sx={{ minHeight: "calc(100vh - 64px)" ,height:"100%"}}>
                <CardContent>
                    <ProductUpdateForm />
                </CardContent>
            </Card>
        </Grid>
           
        </Grid>

                {/* <Grid marginLeft={'120px'} paddingTop={'30px'}>
                    <Typography variant={'h5'} marginLeft={'200px'}>Product Update</Typography>
                </Grid> */}
    </>
    )
}