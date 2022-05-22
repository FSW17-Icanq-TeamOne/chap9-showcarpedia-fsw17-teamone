import { IconButton, Grid, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { List } from "@mui/material";
import { Paper } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Home } from "@mui/icons-material";
import { DirectionsCar } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Fade } from "@mui/material";
import { useEffect } from "react";
import "../../styles/Dashboard.css"
export default function MainNavbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);
  const [isToggle, setIsToggle] = useState(false);

  const removeAccessToken = () => {
    window.localStorage.clear();
    removeCookie("access_token");
  };

  useEffect(() => {
   isToggle?document.body.style.overflow="hidden":document.body.style.overflow="unset"
 }, [isToggle ]);
  const handleToggle = () => setIsToggle((prev) => !prev);

  return (
    <>
     
    <Grid
      container
      columns={{ xs: 2, sm: 8, md: 12 }}
      alignItems={"center"}
      height={"10vh"}
      maxHeight="64px"
      justifyContent={{ xs: "space-between" }}
    >
      <Grid item sm ml={2}>
        <Typography>Showcarpedia</Typography>
      </Grid>
      <Grid item md={5} sm={2}>
        <Grid
          container
          justifyContent="center"
          spacing={{ md: 2, sm: 1 }}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Grid item>
            <Link to="/">
              <Typography>Home Page</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/collection">
              <Typography>Collection</Typography>
            </Link>
          </Grid>
          {/* <Link to='#'><Typography>Contact Us</Typography></Link> */}
        </Grid>
      </Grid>

      <Grid item md={4} sm={3}>
        <Grid
          container
          justifyContent={"flex-end"}
          sx={{ display: { xs: "none", sm: "flex" } }}
          spacing={{ md: 2 }}
          mr={3}
        >
          <Grid item>
            {localStorage.getItem("role") === "superAdmin" && (
              <IconButton
                aria-label="Account"
                onClick={() => window.location.assign("/admin-lists")}
              >
                <SettingsIcon />
              </IconButton>
            )}
            {localStorage.getItem("role") === "admin" && (
              <IconButton
                aria-label="Account"
                onClick={() => window.location.assign("/product-lists")}
              >
                <SettingsIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            {localStorage.getItem("role") === null && (
              <Link to="/login">
                <Typography>Log In</Typography>
              </Link>
            )}
            {(localStorage.getItem("role") === "user" ||
              localStorage.getItem("role") === "admin" ||
              localStorage.getItem("role") === "superAdmin") && (
              <IconButton
                aria-label="Account"
                onClick={() => window.location.assign("/edit/profile")}
              >
                <PersonIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item>
            {(localStorage.getItem("role") === "user" ||
              localStorage.getItem("role") === "admin" ||
              localStorage.getItem("role") === "superAdmin") && (
              <IconButton
                aria-label="Account"
                onClick={() => window.location.assign("/wishlist")}
              >
                <FavoriteBorderRoundedIcon />
              </IconButton>
            )}
          </Grid>

          <Grid item>
            {(localStorage.getItem("role") === "user" ||
              localStorage.getItem("role") === "admin" ||
              localStorage.getItem("role") === "superAdmin") && (
              <IconButton
                aria-label="Account"
                onClick={() => {
                  removeAccessToken();
                  window.location.assign("/login");
                }}
              >
                <LogoutIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{ display: { xs: "flex", sm: "none" } }}
        mr={3}
        justifyContent="flex-end"
      >
        <>
          <input
            className="hamburgerButton"
            type="checkbox"
            onClick={(handleToggle)}
            id="nav-menu"
          />
          <label htmlFor="nav-menu" id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          </>
        </Grid>
      </Grid>
      <Fade in={isToggle}>
        <Paper
          elevation={2}
          sx={{
            zIndex: 2,
            position:"absolute",
            width: "100%",
            height:"100vh"
          }}
        >
          <List>
            <ListItem>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="home" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/collection">
                <ListItemIcon>
                  <DirectionsCar />
                </ListItemIcon>
                <ListItemText primary="collection" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/wishlist">
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="wishlist" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/admin-lists">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="setting" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/edit/profile">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="profile" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Fade>
    </>
  );
}