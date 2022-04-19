import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { MenuItem } from "@mui/material";
import {
  Grid,
  Typography,
  Autocomplete,
  TextField,
  Container,
  Button,
} from "@mui/material";
import {  useFormik } from "formik";
import { useState, useEffect } from "react";

export default function Filter() {
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const [year, setYear] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/v1/cars/make/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    setYear(data.year.map(e=>e.year))
    setBrands(data.brand.sort());
    setCategory(data.category.sort());
  };



  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      brand: "",
      category:"",
      year:""
    },
    onSubmit: (values) => {
      console.log(values, "Filter");
    },
  });
  return (
    <Container>
      <Typography variant={"h5"} textAlign="center" marginBottom={3}>
        Filter
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="brand">brand</InputLabel>
              <Select
                id="brand"
                name="brand"
                value={formik.values.brand}
                onBlur={formik.handleBlur}
                onChange={(e) => formik.setFieldValue("brand",e.target.value)}
              >
                {brands.map((e, i) => (
                  <MenuItem value={e} key={i} >
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

            <Grid item xs={4} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="category">category</InputLabel>
              <Select
                id="category"
                name="category"
                value={formik.values.category}
                onBlur={formik.handleBlur}
                onChange={(e) => formik.setFieldValue("category",e.target.value)}
              >
                {category.map((e, i) => (
                  <MenuItem value={e} key={i} >
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>       
          
        </Grid>

        <Grid display={"flex"} marginTop={"15px"} justifyContent="center">
          <Grid>
            <Button
              type="submit"
              sx={{
                borderRadius: 30,
                borderColor: "#2871CC",
                "&:hover": {
                  transition: ".5s",
                  bgcolor: "#2871CC",
                  color: "white",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
