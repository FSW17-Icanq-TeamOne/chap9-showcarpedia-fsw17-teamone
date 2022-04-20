import { Card, CardContent, Grid, Typography } from "@mui/material";
import AdminDashboardSidebar from "../components/AdminDashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ProductUpdateForm from "../components/ProductUpdateForm";

export default function ProductUpdate() {
    return (
    <>
        <Grid container display={'flex'}>
            <Grid marginRight={'220px'}>
                <AdminDashboardSidebar />
            </Grid>

            <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'}>
                    <Typography variant={'h5'} marginLeft={'200px'}>Product Update</Typography>
                </Grid>

                <Grid ml={'auto'}>
                    <DashboardNavbar />
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