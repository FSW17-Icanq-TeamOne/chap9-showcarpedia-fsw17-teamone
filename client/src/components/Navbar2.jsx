import { Grid, Typography } from "@mui/material";

 export default function Navbar2 () {
     return (
         <nav>
             <Grid 
                display={'flex'} 
                alignItems={'baseline'}
                marginBottom={'45px'}
                marginTop={'30px'}
            >
                <Typography marginLeft={'200px'} mr={'auto'} variant={'h5'} >Logo</Typography>

                <Grid display={'flex'} gap={'40px'} marginRight={'165px'}>
                    <Typography>Wishlist</Typography>
                    <Typography>Account</Typography>
                </Grid>
             </Grid>
             
         </nav>
     )
 }