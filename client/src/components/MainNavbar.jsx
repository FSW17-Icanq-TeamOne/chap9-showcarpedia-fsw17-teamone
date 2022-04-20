import { IconButton, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'

const useStyles = makeStyles((theme) => ({
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
  }));

export default function MainNavbar() {
    const classes = useStyles();
        return(
            <nav>
                <Grid 
                    display={'flex'}
                    alignItems={'baseline'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    justifyContent={''}
                >
                    <Typography marginLeft={'200px'} mr={'auto'} variant={'h5'}>Logo</Typography>

                    <Grid display={'flex'} gap={'40px'}>
                        <Link to='#'><Typography>About Us</Typography></Link>
                        <Link to='/collection'><Typography>Collection</Typography></Link>
                        <Link to='#'><Typography>Contact Us</Typography></Link>
                    </Grid>

                    <Grid display={'flex'} ml={'auto'} marginRight={'165px'} gap={'40px'}>
                        <Grid className={classes.item}>
                            <IconButton aria-label="Account" onClick={() => window.location.assign('/login')}>
                              <PersonIcon className={classes.icon} />
                            </IconButton>
                        </Grid>
                        <Grid className={classes.item}>
                          <IconButton aria-label="Account" onClick={() => window.location.assign('/wishlist')}>
                            <FavoriteBorderRoundedIcon className={classes.icon} 
                            />
                          </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </nav>
        )
}