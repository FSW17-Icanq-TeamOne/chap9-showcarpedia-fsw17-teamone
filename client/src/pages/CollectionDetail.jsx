import MainNavbar from "../components/MainNavbar";
import { Grid, Typography, Card } from "@mui/material";

export default function DetailProduct() {
  return (
    <>
      <MainNavbar />

      {/* Carousel/Image Slider */}
      <Grid container display={"flex"} direction={"column"} marginTop={"10px"} marginBottom={"30px"}>
        <Grid container justifyContent={"center"} marginBottom={"30px"}>
          <Typography variant="h3">Toyota Alphard 350 V6 Fontansicht</Typography>
        </Grid>
        <Grid container display={"flex"} justifyContent={"center"} marginBottom={3}>
          <Card marginBottom={"20px"} sx={{
          width: 1080,
          height: 590
          }}>
            <img width={1080} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg/1920px-Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg" alt="car"></img>
          </Card>
        </Grid>
        <Grid container justifyContent={'center'}>
          <Grid
            display={"flex"}
            direction={"row"}
            justifyContent={"center"}
            // alignItems={"center"}
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
