import { Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grow } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { AdminSidebar } from "./AdminDashboardSidebar";

export default function Dashboard() {
  const [cookie, setCookie, removeCookie] = useCookies("access_token");
  const [istoggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };
  return (
    <>
      <Grid item xs={12}>
        <Toolbar sx={{ background: "orange", height: "64px" }}>
          <IconButton
            onClick={() => handleToggle()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to={"/"}
            sx={{ flexGrow: 1 }}
          >
            Showcarpedia
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Grid>
      <Grid item xs={2} sx={{display:istoggle ? "unset" : "none"}}>
        <Grow in={istoggle}>
          <AdminSidebar />
        </Grow>
      </Grid>
    </>
  );
}
