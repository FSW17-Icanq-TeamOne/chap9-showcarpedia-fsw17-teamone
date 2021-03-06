import {
  Home,
  AccountCircle,
  Favorite,
  Forum,
  ManageAccounts,
} from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  List,
  Link,
} from "@mui/material";
import React from "react";
import "../../styles/Dashboard.css";

function DashboardSidebarUser() {
  return (
    <Box style={{ height: "calc(100vh - 64px)" }}>
      <List>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="Home Page"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          href="/edit/profile"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="#" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText
                primary="Wishlists"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="#" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Forum />
              </ListItemIcon>
              <ListItemText
                primary="Chat Room"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          href="/edit/account"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccounts />
              </ListItemIcon>
              <ListItemText
                primary="Account Settings"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

export const UserSidebar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <DashboardSidebarUser />
    </div>
  );
});
