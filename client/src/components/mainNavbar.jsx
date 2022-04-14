import { Grid, Typography } from "@mui/material";

export default function mainNavbar() {
    return(
        <nav>
            <Grid>
                <Typography>Logo</Typography>

                <Grid>
                    <Typography>About Us</Typography>
                    <Typography>Collection</Typography>
                    <Typography>Contact Us</Typography>
                </Grid>

                <Grid>
                    <Typography>Wishlist</Typography>
                    <Typography>Account</Typography>
                </Grid>
            </Grid>
        </nav>
    )
}