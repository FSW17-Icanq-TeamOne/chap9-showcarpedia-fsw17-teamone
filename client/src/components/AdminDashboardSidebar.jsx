import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'

export default function AdminDashboardSidebar() {
    return(
        <Grid sx={{
            width: 200,
            height: '100vh',

            backgroundColor: 'orange',

            position: 'fixed'
        }}>
            <Grid container display={'flex'} direction={'column'} alignItems={'flex-start'} marginLeft={'50px'} marginTop={'75px'} gap={'40px'}>
                <Link to='/'><Typography>Home</Typography></Link>
                <Link to='#'><Typography>Insight</Typography></Link>
                <Link to='/adminList'><Typography>Admin list</Typography></Link>
                <Link to='/productList'><Typography>Product List</Typography></Link>
            </Grid>
        </Grid>
    )
}