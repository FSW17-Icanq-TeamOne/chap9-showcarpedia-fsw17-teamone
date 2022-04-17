import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Show from "../components/card";
import Card from "../components/card";
import MainNavbar from "../components/MainNavbar";

export default function Collection() {
  const filterFormik = useFormik({
    initialValues: {
      brand: ["Toyota", "Honda", "Mitsubishi"],
      category: ["Sedan", "Coupe", "Sport", "SUV"],
      grade: ["1", "2", "3", "4", "5"],
    },
    onSubmit: (values) => {
      console.log(values, "Filter");
    },
  });

  return (
    <>
      <MainNavbar />

      {/* Filter */}
      <Grid
        container
        display={"flex"}
        direction={"column"}
        alignItems={"center"}
        marginTop={"10px"}
      >
        <Grid container justifyContent={"center"} marginBottom={"20px"}>
          <Typography variant={"h5"}>Filter</Typography>
        </Grid>

        <Grid display={"flex"} gap={"20px"}>
          <Grid>
            <Autocomplete
              disablePortal
              id="brand"
              name="brand"
              sx={{
                width: 325,
                height: 50,
              }}
              value={filterFormik.values.brand[""]}
              onChange={filterFormik.handleChange}
              options={filterFormik.values.brand}
              renderInput={(params) => (
                <TextField {...params} label="Brand" focused />
              )}
            />
          </Grid>

          <Grid>
            <Autocomplete
              disablePortal
              id="category"
              name="category"
              sx={{
                width: 325,
                height: 50,
              }}
              value={filterFormik.values.category[""]}
              onChange={filterFormik.handleChange}
              options={filterFormik.values.category}
              renderInput={(params) => (
                <TextField {...params} label="Category" focused />
              )}
            />
          </Grid>

          <Grid>
            <Autocomplete
              disablePortal
              id="grade"
              name="grade"
              sx={{
                width: 325,
                height: 50,
              }}
              value={filterFormik.values.grade[""]}
              onChange={filterFormik.handleChange}
              options={filterFormik.values.grade}
              renderInput={(params) => (
                <TextField {...params} label="Grade" focused />
              )}
            />
          </Grid>
        </Grid>

        <Grid display={"flex"} marginTop={"15px"}>
          <Grid>
            <Button type="submit">Reset</Button>
          </Grid>

          <Grid>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Collection List */}
      <Container >
      <Grid
        container
        marginTop={"100px"}  
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Card />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card />
        </Grid>
        
      </Grid>
      </Container>
      
    </>
  );
}
