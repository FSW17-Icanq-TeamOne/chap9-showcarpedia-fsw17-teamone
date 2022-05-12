import {
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Autocomplete,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import PreviewImages from "./PreviewImages";

export default function ProductCreationForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      brand: "",
      grade: "",
      category: "",
      year: "",
      kiloMeter: "",
      description: "",
      photoProducts: "",
    },
    onSubmit: async (value) => {
      try {
        const response = await fetch("http://localhost:4000/v1/cars", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(value),
        });
        if (response.ok) {
          console.log("ok");
        } else {
          console.log("tidak ok");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      {/* Form */}
      <Grid container spacing={3}>
        {/* Picture */}
        <Grid item xs={6}>
          <Grid
            container
          >
            {/* Image Viewer */}
            <PreviewImages />
          </Grid>
        </Grid>

        <Grid item xs={6}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container display={"flex"} direction={"column"} gap={"30px"}>
            <Grid>
              <TextField
                id="title"
                name="title"
                label="Add Product's Name"
                value={formik.values.title}
                onChange={formik.handleChange}
                variant="standard"
                sx={{
                  width: 400,
                }}
              />
            </Grid>

            <Grid display={"flex"} gap={"20px"}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Brand</InputLabel>
                  <Select
                    id="brand"
                    name="brand"
                    sx={{
                      width: 345,
                    }}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"Porsche"}>Porsche</MenuItem>
                    <MenuItem value={"BMW"}>BMW</MenuItem>
                    <MenuItem value={"Ford"}>Ford</MenuItem>
                    <MenuItem value={"Toyota"}>Toyota</MenuItem>
                    <MenuItem value={"Honda"}>Honda</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Grade</InputLabel>
                  <Select
                    id="grade"
                    name="grade"
                    sx={{
                      width: 95,
                    }}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    id="category"
                    name="category"
                    sx={{
                      width: 345,
                    }}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"Sport"}>Sport</MenuItem>
                    <MenuItem value={"SUV"}>SUV</MenuItem>
                    <MenuItem value={"Pickup"}>Pickup</MenuItem>
                    <MenuItem value={"Coupe"}>Pickup</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid>
              <TextField
                id="year"
                name="year"
                label="Input Product's Year"
                value={formik.values.year}
                onChange={formik.handleChange}
                sx={{
                  width: 345,
                }}
              />
            </Grid>

            <Grid>
              <TextField
                id="kiloMeter"
                name="kiloMeter"
                label="Input Kilometer"
                value={formik.values.kiloMeter}
                onChange={formik.handleChange}
                sx={{
                  width: 345,
                }}
              />
            </Grid>

            <Grid>
              <TextField
                id="description"
                name="description"
                label="Description"
                multiline
                value={formik.values.description}
                onChange={formik.handleChange}
                sx={{
                  width: 460,
                }}
              />
            </Grid>

            <Grid>
              <Button
                sx={{
                  width: 460,

                  borderRadius: 20,

                  backgroundColor: "orange",
                  color: "white",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        </Grid>
       
      </Grid>
    </>
  );
}
