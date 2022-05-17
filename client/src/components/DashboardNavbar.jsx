import { Menu } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function DashboardNavbar({toggle}) {
  const [cookie, setCookie, removeCookie] = useCookies("access_token");
  const [istoggle,setIsToggle] = useState(false)
  const handleToggle=() => {
    setIsToggle(prev=>!prev)
    toggle(istoggle)
  }

  const removeAccessToken = () => {
    window.localStorage.clear();
    removeCookie("access_token");
  };

  return (
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
      <Typography variant="h6" component={Link} to={"/"} sx={{ flexGrow: 1 }}>
        Showcarpedia
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  );
}
