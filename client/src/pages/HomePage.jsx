import { Button, Grid, Typography } from "@mui/material";
import MainNavbar from "../components/MainNavbar";
import "../styles/Home.css";
import Avatar from "@mui/material/Avatar";
import BrandList from "../components/BrandList";
import Carousel from "../components/CarouselContainer";
import HomeFooter from "../components/HomeFooter";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* First Page */}
      <Grid>
        <MainNavbar />
      </Grid>
      <Grid>
        <Carousel />
      </Grid>

      {/* Second Page */}
      <Grid
        container
        height={480}
        alignItems="center"
        spacing={3}
        justifyContent="center"
      >
        <Grid item>
          <Avatar
            src="https://cdn.discordapp.com/attachments/960564590574456852/966305346257838130/103054527.jpeg"
            sx={{ width: 230, height: 230 }}
          />
        </Grid>

        <Grid item >
          <Grid container alignItems={{xs:"center",sm:"start"}}  direction="column" margin={2}>
            <Typography variant={"h4"} mb={3}>
              ABOUT US
            </Typography>

            <Typography mb={3}>
              "Showcarpedia is a Car Showroom Website by TeamOne FSW17 Binar
              Academy"
            </Typography>

            <Button
              sx={{
                width: 140,
                height: 50,
                backgroundColor: "black",
                color: "white",
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      {/* Third Page */}
      <BrandList />

      {/* Fourth Page */}
      <Box bgcolor="#002A30" width="100vw">
        <HomeFooter />
      </Box>
    </>
  );
}