import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import { FavoriteOutlined } from "@mui/icons-material";
import { useState } from "react";
import { borderColor } from "@mui/system";
export default function Show() {
  const [wishlist, setWishlist] = useState(false);

  const handleWishlist = () => {
    setWishlist((prev) => !prev);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        },
      }}
    >
        <CardMedia
          component={"img"}
          image={
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*"
          }
          alt={"Image"}
          sx={{
            width: "90%",
            mx: "auto",
            mt: "10px",
            borderRadius: 2,
          }}
        />
        <CardContent>
          <Grid gridTemplateRows={"repeat(3,1fr)"}>
            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography marginLeft={2} fontWeight="bold" fontSize={"2em"} >ini models</Typography>
              <IconButton onClick={handleWishlist}>
                {wishlist ? (
                  <FavoriteOutlined sx={{ color: "red", transition: ".5s" }} />
                ) : (
                  <FavoriteOutlined />
                )}
              </IconButton>
            </Grid>

            <Grid
              display={"flex"}
              alignItems={"center"}
              marginTop={3}
              justifyContent="space-between"
            >
              <div className="model">
                <Typography marginLeft={2} fontWeight="bold">Model Year</Typography>
                <Typography marginLeft={2}>2020</Typography>
              </div>
              <div className="odometer">
                <Typography marginRight={5} fontWeight="bold">Odometer</Typography>
                <Typography marginRight={5}>1000 km</Typography>
              </div>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} marginTop={5}>
              <Button
                sx={{
                  borderRadius: 30,
                  border: 2,
                  borderColor: "#2871CC",
                  "&:hover": {
                    transition: ".5s",
                    bgcolor: "#2871CC",
                    color: "white",
                  },
                }}
              >
               <Typography textTransform={"capitalize"} px={2}>view detail</Typography> 
              </Button>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
}
