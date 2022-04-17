import { Grid, Typography, Card, CardContent } from "@mui/material";
import DashboardNavbar from "../components/DashboardNavbar";

export default function SuperAdminDashboard() {
    return(
        <>
            <Grid container display={'flex'}>
                <Grid marginRight={'220px'}>
                    <SuperAdminDashboard />
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
                    <CardContent>
                        <Grid />
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}