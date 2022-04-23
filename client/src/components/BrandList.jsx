import { Box } from "@mui/material";
import { Typography, } from "@mui/material";

const BrandList = () => {
  return (
    <div mt="5">
        <Typography textAlign="center" variant={"h4"}>
          OUR BRAND
        </Typography>
        <Box display="flex" justifyContent="center" mt={2} mb={2} overflow="hidden"  >
          <div className="Slider">
            <div className="Track">
          {itemData.map((item, idx) => (
            <div className="slide" key={idx}>
              <img src={item} alt={item}  height="100px"  style={{backgroundColor:"white",margin:"20px"}} />
            </div>
          ))}
          </div>
          </div>
        </Box>
    </div>
  );
};

const itemData = [
  "audi.png",
  "toyota.png",
  "nissan.jpg",
  "volkswagen.png",
  "mini.png",
  "lamborghini.png",
  "mercedes.png",
"jaguar.png",
  "audi.png",
  "toyota.png",
  "nissan.jpg",
  "volkswagen.png",
  "mini.png",
  "lamborghini.png",
  "mercedes.png",
"jaguar.png",
];

export default BrandList;
