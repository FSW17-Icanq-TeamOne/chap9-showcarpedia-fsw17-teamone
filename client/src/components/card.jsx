import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import {Link} from "react-router-dom"
import { FavoriteOutlined } from "@mui/icons-material";
import { useState } from "react";
export default function Show({data}) {
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
          image={data.photoProducts[0]} 
          alt={data.title}
          sx={{
            width: "90%",
            height:"250px",
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
              <Typography marginLeft={2} fontWeight="bold" fontSize={"2em"} >{data.title}</Typography>
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
                <Typography marginLeft={2}>{data.year}</Typography>
              </div>
              <div className="odometer">
                <Typography marginRight={5} fontWeight="bold">Odometer</Typography>
                <Typography marginRight={5}>{data.kiloMeter} km</Typography>
              </div>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} marginTop={5}>
              <Button
              component={Link}
              to={`/collection/${data.id}`}
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