import { Grid, Typography } from "@mui/material";

export default function SuperAdminDashboardSidebar() {
    return(
        <Grid sx={{
            width: 200,
            height: '100vh',

            backgroundColor: 'orange',

            position: 'fixed'
        }}>
            <Grid display={'flex'} direction={'column'} alignItems={'flex-start'} marginLeft={'80px'} marginTop={'75px'} gap={'40px'}>
                <Typography>Home</Typography>
                <Typography>Insight</Typography>
                <Typography>User List</Typography>
                <Typography>Admin List</Typography>
                <Typography>Product List</Typography>
            </Grid>
        </Grid>
    )
}