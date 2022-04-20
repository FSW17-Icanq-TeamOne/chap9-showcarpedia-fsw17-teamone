import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
                         <Link to='/'><Typography>Home</Typography></Link>
                        <Link to='/collection'><Typography>Collection</Typography></Link>
                </Grid>
             </Grid>
             
         </nav>
     )
 }