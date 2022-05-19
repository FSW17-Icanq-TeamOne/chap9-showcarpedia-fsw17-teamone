import {Home, AccountCircle, Favorite, Forum, ManageAccounts } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import '../../styles/Dashboard.css'

export default function UserDashboardSidebar() {
    return(
        <Paper  style={{height:'calc(100vh - 64px)'}}>
        <List>
          <ListItem disablePadding>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home Page" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="#">
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/admin-lists">
              <ListItemButton>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Wishlists" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="#">
              <ListItemButton>
                <ListItemIcon>
                  <Forum />
                </ListItemIcon>
                <ListItemText primary="Chat Room" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/edit/account">
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccounts />
                </ListItemIcon>
                <ListItemText primary="Account Settings" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Paper>
        // <Grid sx={{
        //     width: '200px',
        //     height: '100vh',

        //     backgroundColor: 'orange',

        //     position: 'fixed'
        // }} >
        //     <Grid container display={'flex'} direction={'column'} alignItems={'flex-start'} marginLeft={'50px'} marginTop={'75px'} gap={'40px'}>
        //         <Link to='/'><Typography>Home</Typography></Link>
        //         <Link to='/edit/profile'><Typography>Profile</Typography></Link>
        //         <Link to='#'><Typography>Wishlist</Typography></Link>
        //         <Link to='/edit/account'><Typography>Account Setting</Typography></Link>
        //         <Link to='#'><Typography>Chat Room</Typography></Link>
        //     </Grid>
        // </Grid>
    )
}