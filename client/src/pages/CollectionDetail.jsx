import MainNavbar from "../components/MainNavbar";
import { Grid, Typography, Card } from "@mui/material";
import CarouselDetail from "../components/CarouselDetail";

export default function DetailProduct() {
  return (
    <>
      <Grid>
        <MainNavbar />
      </Grid>
      <Grid container justifyContent={"center"} marginBottom={"50px"}>
        <Typography variant="h3">Toyota Alphard 350 V6 Fontansicht</Typography>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} marginBottom={5} >
        <CarouselDetail/>
      </Grid>

      <Grid container display={"flex"} direction={"column"} marginTop={"10px"} marginBottom={"30px"}>
        <Grid container justifyContent={'center'}>
          <Grid
            display={"flex"}
            direction={"row"}
            justifyContent={"center"}
          >
            <Grid container direction={"column"} >
              <Grid display={"flex"} marginBottom={"20px"} direction={"column"} width={'760px'}>
                <Card sx={{
                   width: 500,
                   height: 100,
                   backgroundColor: 'lightgray',
                   borderRadius:2,
                   padding:2
                }}>
                  <Typography fontSize={30}>Toyota Alphard 350 V6 Fontansicht</Typography>
                  <Typography variant="subtitle">GGH30W</Typography>
                  <Typography variant="h5">$3.500</Typography>
                </Card>
              </Grid>
              <Grid display={"flex"}>
                <Card sx={{
                   width: 500,
                   backgroundColor: 'lightgray',
                   borderRadius:2,
                   padding: 2
                }}>
                  <Typography fontSize={30} >Car's Feature</Typography>
                  <br></br>
                  <Typography fontSize={20}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container display={"flex"} alignItems={"flex-start"} marginLeft={-26}>
              <Card sx={{
                width: 500,
                backgroundColor: 'lightgray',
                borderRadius:2,
                padding:2
              }}>
                <Typography fontSize={30}>About Car and Document</Typography>
                <br></br>
                <Typography fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
