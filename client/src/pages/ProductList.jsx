import { Button, Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";
import AdminDashboardSidebar from '../components/AdminDashboardSidebar'
import ProductTable from "../components/ProductTable";

export default function ProductList() {
    return (
        <>
            <Grid container display={'flex'}>
                <Grid marginRight={'220px'}>
                    <AdminDashboardSidebar />
                </Grid>

                <Grid container display={'flex'} alignItems={'center'}>
                    <Grid marginLeft={'120px'} paddingTop={'30px'}>
                        <Typography variant={'h5'} marginLeft={'200px'}>Product List</Typography>
                    </Grid>

                    <Grid ml={'auto'}>
                        <DashboardNavbar />
                    </Grid>
                </Grid>
            </Grid>
 
            <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
                <Card>
                    <CardContent>
                        <ProductTable />
                        <Button  variant="contained" href={"/product/create"}>
                            Create Product
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}