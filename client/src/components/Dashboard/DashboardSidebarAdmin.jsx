import { SupervisorAccount, Inventory, SettingsApplications, Forum, Insights, Home } from "@mui/icons-material";
import { Box, ListItem, ListItemText, ListItemIcon, ListItemButton, List, Link  } from "@mui/material";
import React from "react"
import "../../styles/Dashboard.css";

function DashboardSidebarAdmin() {
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

        <Link href="#" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Insights />
              </ListItemIcon>
              <ListItemText
                primary="Insights"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        {localStorage.getItem("role") === "superAdmin" && (
          <Link
            href="/admin-lists"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SupervisorAccount />
                </ListItemIcon>
                <ListItemText
                  primary="Admin Manager"
                  sx={{ display: { xs: "none", sm: "unset" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        <Link
          href="/collection-lists"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inventory />
              </ListItemIcon>
              <ListItemText
                primary="Collection Manager"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        {localStorage.getItem("role") === "superAdmin" && (
          <Link href="#" style={{ textDecoration: "none", color: "black" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Forum />
                </ListItemIcon>
                <ListItemText
                  primary="Chat Rooms"
                  sx={{ display: { xs: "none", sm: "unset" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        <Link href="#" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsApplications />
              </ListItemIcon>
              <ListItemText
                primary="Web Settings"
                sx={{ display: { xs: "none", sm: "unset" } }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}

export const AdminSidebar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <DashboardSidebarAdmin />
    </div>
  );
});
