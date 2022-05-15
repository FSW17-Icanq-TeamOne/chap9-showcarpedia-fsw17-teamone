import { Card, CardContent, Grid, Typography } from "@mui/material";
import Dashboard from "../components/Dashboard";

import ProductUpdateForm from "../components/ProductUpdateForm";

export default function ProductUpdate() {
    return (
    <>
        <Grid container >
                <Dashboard />

            <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'}>
                    <Typography variant={'h5'} marginLeft={'200px'}>Product Update</Typography>
                </Grid>

            </Grid>
        </Grid>

        <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
            <Card>
                <CardContent>
                    <ProductUpdateForm />
                </CardContent>
            </Card>
        </Grid>
    </>
    )
}