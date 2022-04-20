import { IconButton, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'
import { useCookies } from 'react-cookie';

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

  const [cookie, setCookie, removeCookie] = useCookies(['access_token'])

  const removeAccessToken = () => {
      window.localStorage.clear();
      removeCookie('access_token')
  } 

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
                    <Typography marginLeft={'200px'} mr={'auto'} variant={'h5'}>Showcarpedia</Typography>

                    <Grid display={'flex'} gap={'40px'}>
                        <Link to='/'><Typography>Home</Typography></Link>
                        <Link to='/collection'><Typography>Collection</Typography></Link>
                        {/* <Link to='#'><Typography>Contact Us</Typography></Link> */}
                    </Grid>

                    <Grid display={'flex'} ml={'auto'} marginRight={'165px'} gap={'40px'}>
                        
                        <Grid className={classes.item}>
                        {((localStorage.getItem("role") === "superAdmin")) &&
                            <IconButton aria-label="Account" onClick={() => window.location.assign('/adminList')}>
                              <SettingsIcon className={classes.icon} />
                            </IconButton>
                        }
                         {((localStorage.getItem("role") === "admin")) &&
                            <IconButton aria-label="Account" onClick={() => window.location.assign('/productList')}>
                              <SettingsIcon className={classes.icon} />
                            </IconButton>
                        }
                        </Grid>
                        <Grid className={classes.item}>
                        {localStorage.getItem('role') === null &&
                             <Link to='/login'><Typography>Login</Typography></Link>
                        }
                        {((localStorage.getItem("role") === "user") || (localStorage.getItem("role") === "admin") || (localStorage.getItem("role") === "superAdmin")) &&
                            <IconButton aria-label="Account" onClick={() => window.location.assign('/edit/profile')}>
                              <PersonIcon className={classes.icon} />
                            </IconButton>
                        }
                        </Grid>

                        <Grid className={classes.item}>
                          {((localStorage.getItem("role") === "user") || (localStorage.getItem("role") === "admin") || (localStorage.getItem("role") === "superAdmin")) &&
                          <IconButton aria-label="Account" onClick={() => window.location.assign('/#')}>
                            <FavoriteBorderRoundedIcon className={classes.icon} 
                            />
                          </IconButton>
                          } 
                        </Grid>

                        <Grid className={classes.item}>
                        {((localStorage.getItem("role") === "user") || (localStorage.getItem("role") === "admin") || (localStorage.getItem("role") === "superAdmin")) &&
                            <IconButton aria-label="Account" onClick={() => {removeAccessToken(); window.location.assign('/login')}}>
                              <LogoutIcon className={classes.icon} />
                            </IconButton>
                        }
                        </Grid>
                        
                    </Grid>
                </Grid>
            </nav>
        )
}
