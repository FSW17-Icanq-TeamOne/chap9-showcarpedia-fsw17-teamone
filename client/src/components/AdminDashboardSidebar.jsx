import { Grow } from "@material-ui/core";
import { Drafts } from "@mui/icons-material";
import { Inbox } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { List } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'

export default function AdminDashboardSidebar() {

    return(

            <Paper  style={{height:'calc(100vh - 64px)'}}>
                 <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
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