import { Button, Grid, Typography, Divider, Box, Avatar  } from "@mui/material";
import MainNavbar from "../../components/NavigationBar/MainNavbar";
import BrandList from "../../components/HomePage/BrandList";
import Carousel from "../../components/HomePage/Carousel/CarouselContainer";
import HomePageFooter from "../../components/HomePage/HomePageFooter";
import "../../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Grid>
        <MainNavbar />
      </Grid>

      {/* Carousel */}
      <Grid>
        <Carousel />
      </Grid>

      {/* About Us*/}
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

      {/* Brand Lists */}
      <BrandList />

      {/* Footer */}
      <Box bgcolor="#002A30" width="100vw">
        <HomePageFooter />
      </Box>
    </>
  );
}