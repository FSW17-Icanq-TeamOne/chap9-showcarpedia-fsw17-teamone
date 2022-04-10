import { Grid, Typography } from "@mui/material";

 export default function Navbar2 () {
     return (
         <nav>
             <Grid 
                display={'flex'} 
                alignItems={'baseline'} 
                marginLeft={'165px'}
            >
                <Typography mr={'auto'} variant={'h5'} marginTop={'40px'}>Logo</Typography>

                <Grid display={'flex'} gap={'40px'} marginRight={'165px'}>
                    <Typography>Wishlist</Typography>
                    <Typography>Account</Typography>
                </Grid>
             </Grid>
             
         </nav>
     )
 }