import MainNavbar from "../components/MainNavbar";
import { Grid, Typography, Box } from "@mui/material";

export default function DetailProduct() {
  return (
    <>
      <MainNavbar />

      {/* Carousel/Image Slider */}
      <Grid container display={"flex"} direction={"column"} marginTop={"10px"}>
        <Grid container justifyContent={"center"} marginBottom={"10px"}>
          <Typography variant="h3">Car Name</Typography>
        </Grid>
        <Grid container justifyContent={"center"} marginBottom={"20px"}>
          <img src="https://akcdn.detik.net.id/visual/2018/08/09/74d69c6a-18a4-4c16-8565-1c98f9f4388e_169.jpeg?w=650" alt="car"></img>
        </Grid>
        <Grid container justifyContent={'center'}>
          <Grid
            display={"flex"}
            direction={"row"}
            alignItems={"center"}
          >
            <Grid container direction={"column"} >
              <Grid display={"flex"} marginBottom={"20px"} direction={"column"} width={'500px'}>
                <Box sx={{
                   width: 370,
                   height: 100,
                   backgroundColor: 'lightgray',
                   borderRadius:2,
                   padding:2
                }}>
                  <Typography variant="h4">Car Name Long</Typography>
                  <Typography variant="subtitle">Models</Typography>
                  <Typography variant="h5">Price</Typography>
                </Box>
              </Grid>
              <Grid display={"flex"}>
                <Box sx={{
                   width: 370,
                   height: 100,
                   backgroundColor: 'lightgray',
                   borderRadius:2,
                   padding: 2
                }}>
                  <Typography variant="h4">Car's Feature</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container marginLeft={-10}>
              <Box sx={{
                width: 370,
                height: 255,
                backgroundColor: 'lightgray',
                borderRadius:2,
                padding:2
              }}>
                <Typography variant="h4">About Car and Document</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
