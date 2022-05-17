import { IconButton, Grid, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
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
import {Link} from "react-router-dom"
import { useEffect } from "react";
export default function MainNavbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);
  const [isToggle, setIsToggle] = useState(false);

  const removeAccessToken = () => {
    window.localStorage.clear();
    removeCookie("access_token");
  };

  useEffect(() => {
   isToggle?document.body.style.overflow="hidden":document.body.style.overflow="unset"
 }, [isToggle]);
 
  const handleToggle = () => setIsToggle((prev) => !prev);

  return (
    <>
      <Grid
        container
        columns={{ xs: 2, sm: 8, md: 12 }}
        alignItems={"center"}
        height={"8vh"}
        maxHeight="64px"
        justifyContent={{ xs: "space-between" }}
      >
        <Grid item sm ml={2} >
          <Typography component={Link} color="black" to={"/"} style={{textDecoration:"none"}}>Showcarpedia</Typography>
        </Grid>
        <Grid item md={5} sm={2}>
          <Grid
            container
            justifyContent="center"
            spacing={{ md: 2, sm: 1 }}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Grid item >
              <Typography style={{textDecoration:"none"}} color="black" component={Link} to={"/"}
              >
                Home
              </Typography>
            </Grid>
            <Grid item  >
              <Typography component={Link} to={"/collection"} style={{textDecoration:"none"}} color="black">Collection</Typography>
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
                  onClick={() => window.location.assign("/adminList")}
                >
                  <SettingsIcon />
                </IconButton>
              )}
              {localStorage.getItem("role") === "admin" && (
                <IconButton
                  aria-label="Account"
                  onClick={() => window.location.assign("/productList")}
                >
                  <SettingsIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              {localStorage.getItem("role") === null && (
                <Link to="/login">
                  <Typography>Login</Typography>
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
                  onClick={() => window.location.assign("/#")}
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
              onClick={handleToggle}
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
          elevation={5}
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
              <ListItemButton component={Link} to="/#">
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="wishlist" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/adminList">
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
