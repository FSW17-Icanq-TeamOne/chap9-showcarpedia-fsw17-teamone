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
import '../styles/Dashboard.css'
import React from "react"
 function AdminDashboardSidebar() {

    return(

            <Paper  style={{height:'calc(100vh - 64px)'}}>
                 <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Insight" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Admin list" sx={{display:{xs:"none", sm:"unset"}}} />
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
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Product List" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Chat Room" sx={{display:{xs:"none", sm:"unset"}}} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Web Setting" sx={{display:{xs:"none", sm:"unset"}}} />
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

export const AdminSidebar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
     < AdminDashboardSidebar />
    </div>
  );
})