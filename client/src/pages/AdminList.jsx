import { Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";
import AdminDashboardSidebar from '../components/AdminDashboardSidebar'
import AdminTable from "../components/AdminTable";

export default function AdminList() {
    return (
        <>
            <Grid container display={'flex'}>
                <Grid marginRight={'220px'}>
                    <AdminDashboardSidebar />
                </Grid>

                <Grid container display={'flex'} alignItems={'center'}>
                    <Grid marginLeft={'120px'} paddingTop={'30px'}>
                        <Typography variant={'h5'} marginLeft={'200px'}>Admin List</Typography>
                    </Grid>

                    <Grid ml={'auto'}>
                        <DashboardNavbar />
                    </Grid>
                </Grid>
            </Grid>
 
            <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
                <Card>
                    <CardContent>
                        <AdminTable />
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}