import { Card, CardContent, Grid, Typography } from "@mui/material";
import Dashboard from "../components/Dashboard";

import ProductUpdateForm from "../components/ProductUpdateForm";

export default function ProductUpdate() {
    return (
    <>
        <Grid container >
                <Dashboard />

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