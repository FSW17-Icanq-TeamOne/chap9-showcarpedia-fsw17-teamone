import { Grid, Typography } from "@mui/material";

export default function UserDashboardSidebar() {
    return(
        <Grid sx={{
            width: '200px',
            height: '100vh',

            backgroundColor: 'orange',

            position: 'fixed'
        }} >
            <Grid container display={'flex'} direction={'column'} alignItems={'flex-start'} marginLeft={'80px'} marginTop={'75px'} gap={'40px'}>
                <Typography>Home</Typography>
                <Typography>Wishlist</Typography>
            </Grid>
        </Grid>
    )
}