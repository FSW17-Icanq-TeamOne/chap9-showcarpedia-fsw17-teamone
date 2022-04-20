import { Button, Grid, Typography } from "@mui/material";
import { useCookies } from 'react-cookie';

export default function DashboardNavbar() {
    const [cookie, setCookie, removeCookie] = useCookies(['access_token'])

    const removeAccessToken = () => {
        window.localStorage.clear();
        removeCookie('access_token')
    } 

    return(
        <nav>
            <Grid display={'flex'} justifyContent={'flex-end'} gap={'30px'} paddingTop={'30px'} marginRight={'120px'}>
               <Grid sx={{
                   borderRadius: '50%',
                   
                   backgroundColor: 'orange',
                   color: 'white',

                   width: 45,
                   height: 45,

                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center'
               }} ><Typography>P</Typography></Grid> 
               <Button onClick={() => {
                   removeAccessToken()
                   window.location.assign('/login')
                }} sx={{
                   borderRadius: '16px',

                   width: 110,

                   color: 'white',
                   backgroundColor: 'orange'
               }}>Sign Out</Button>
            </Grid>
        </nav>
    )
}