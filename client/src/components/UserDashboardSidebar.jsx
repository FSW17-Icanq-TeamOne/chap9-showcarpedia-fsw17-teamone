import { Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'

export default function UserDashboardSidebar() {
    return(
        <Grid sx={{
            width: '200px',
            height: '100vh',

            backgroundColor: 'orange',

            position: 'fixed'
        }} >
            <Grid container display={'flex'} direction={'column'} alignItems={'flex-start'} marginLeft={'50px'} marginTop={'75px'} gap={'40px'}>
                <Link to='/'><Typography>Home</Typography></Link>
                <Link to='/edit/profile'><Typography>Profile</Typography></Link>
                <Link to='#'><Typography>Wishlist</Typography></Link>
            </Grid>
        </Grid>
    )
}