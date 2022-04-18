import { Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";
import SuperAdminDashboardSidebar from "../components/AdminDashboardSidebar"
import ProductTable from "../components/ProductTable2.jsx";
export default function SuperAdminDashboard() {
    return(
        <>
            <Grid container display={'flex'}>
                <Grid marginRight={'220px'}>
                    <SuperAdminDashboardSidebar />
                </Grid>

                <Grid container displa={'flex'} alignItems={'center'}>
                    <Grid marginLeft={'120px'} paddingTop={'30px'}>
                        <Typography variant={'h5'} marginLeft={'200px'}>Hello, Username</Typography>
                    </Grid>

                    <Grid ml={'auto'}>
                        <DashboardNavbar />
                    </Grid>
                </Grid>
            </Grid>

            <Grid>
                <Card>
                    <CardContent >
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid marginLeft={'325px'} marginTop={'25px'}>
                <ProductTable />
            </Grid>
        </>
    )
}