import { IconButton, Grid, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { useCookies } from "react-cookie";

export default function MainNavbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);

  const removeAccessToken = () => {
    window.localStorage.clear();
    removeCookie("access_token");
  };

  return (
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
              <Typography>Home</Typography>
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
            onClick={() => console.log(1)}
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
  );
}
