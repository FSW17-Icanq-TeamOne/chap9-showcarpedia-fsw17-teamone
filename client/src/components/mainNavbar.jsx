import { Grid, Typography } from "@mui/material";

export default function MainNavbar() {
    return(
        <nav>
            <Grid 
                display={'flex'}
                alignItems={'baseline'}
                marginBottom={'45px'}
                marginTop={'30px'}
                justifyContent={''}
            >
                <Typography marginLeft={'200px'} mr={'auto'} variant={'h5'}>Logo</Typography>

                <Grid display={'flex'} gap={'40px'}>
                    <Typography>About Us</Typography>
                    <Typography>Collection</Typography>
                    <Typography>Contact Us</Typography>
                </Grid>

                <Grid display={'flex'} ml={'auto'} marginRight={'165px'} gap={'40px'}>
                    <Typography>Wishlist</Typography>
                    <Typography>Account</Typography>
                </Grid>
            </Grid>
        </nav>
    )
}