import { Grow } from "@material-ui/core";
import { SupervisorAccount, Home, Inventory, SettingsApplications, Forum, Insights } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'

export default function AdminDashboardSidebar() {

    return(

      <Paper  style={{height:'calc(100vh - 64px)'}}>
        <List>
          <ListItem disablePadding>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="#">
              <ListItemButton>
                <ListItemIcon>
                  <Insights />
                </ListItemIcon>
                <ListItemText primary="Insights" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/adminList">
              <ListItemButton>
                <ListItemIcon>
                  <SupervisorAccount />
                </ListItemIcon>
                <ListItemText primary="Admin Manager" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/productList">
              <ListItemButton>
                <ListItemIcon>
                  <Inventory />
                </ListItemIcon>
                <ListItemText primary="Product Manager" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="#">
              <ListItemButton>
                <ListItemIcon>
                  <Forum />
                </ListItemIcon>
                <ListItemText primary="Chat Rooms" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="#">
              <ListItemButton>
                <ListItemIcon>
                  <SettingsApplications />
                </ListItemIcon>
                <ListItemText primary="Web Settings" sx={{display:{xs:"none", sm:"unset"}}} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Paper>


            // <Paper  sx={{minHeight:"100vh",height:"100%",background:"orange"}}>
            //     <Link to='/'><Typography>Home</Typography></Link>
            //     <Link to='#'><Typography>Insight</Typography></Link>
            //     {((localStorage.getItem("role") === "superAdmin")) &&
            //     <Link to='/adminList'><Typography>Admin list</Typography></Link>
            //     }
            //     <Link to='/productList'><Typography>Product List</Typography></Link>
            //     <Link to='#'><Typography>Chat Room</Typography></Link>
            //     {((localStorage.getItem("role") === "superAdmin")) &&
            //     <Link to='#'><Typography>Web Setting</Typography></Link>
            //     }
            // </Paper>
  
    )
}