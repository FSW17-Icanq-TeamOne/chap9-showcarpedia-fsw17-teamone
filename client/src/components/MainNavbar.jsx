import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonIcon from '@mui/icons-material/Person';

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
                    marginBottom={'45px'}
                    paddingTop={'30px'}
                    justifyContent={''}
                >
                    <Typography marginLeft={'200px'} mr={'auto'} variant={'h5'}>Logo</Typography>

                    <Grid display={'flex'} gap={'40px'}>
                        <Typography>About Us</Typography>
                        <Typography>Collection</Typography>
                        <Typography>Contact Us</Typography>
                    </Grid>

                    <Grid display={'flex'} ml={'auto'} marginRight={'165px'} gap={'40px'}>
                        <div className={classes.item}>
                            <PersonIcon className={classes.icon} />
                        </div>
                        <div className={classes.item}>
                            <FavoriteBorderRoundedIcon className={classes.icon} />
                        </div>
                    </Grid>
                </Grid>
            </nav>
        )
}