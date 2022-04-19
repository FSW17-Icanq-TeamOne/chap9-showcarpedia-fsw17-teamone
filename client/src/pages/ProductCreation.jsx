import { Card, CardContent, Grid, Typography } from "@mui/material";
import AdminDashboardSidebar from "../components/AdminDashboardSidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ProductCreationForm from "../components/ProductCreationForm";

export default function ProductCreation() {
    return (
    <>
        <Grid container display={'flex'}>
            <Grid marginRight={'220px'}>
                <AdminDashboardSidebar />
            </Grid>

            <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'}>
                    <Typography variant={'h5'} marginLeft={'200px'}>Product Creation</Typography>
                </Grid>

                <Grid ml={'auto'}>
                    <DashboardNavbar />
                </Grid>
            </Grid>
        </Grid>

        <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
            <Card>
                <CardContent>
                    <ProductCreationForm />
                </CardContent>
            </Card>
        </Grid>
    </>
    )
}