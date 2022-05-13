import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Grid,
  TextField,
  TextareaAutosize
} from "@mui/material";
import { useFormik } from "formik";
import PreviewImages from "./PreviewImages";
import { brands, grades, categories } from "../carMake";
import { useState } from "react";

export default function ProductCreationForm() {
  const [urls,setUrls] = useState([])

  const getUrls =(url) => console.log(url)
  
  
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
      console.log(value);
      // try {
      //   const response = await fetch("http://localhost:4000/v1/cars", {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     credentials: "include",
      //     body: JSON.stringify(value),
      //   });
      //   if (response.ok) {
      //     console.log("ok");
      //   } else {
      //     console.log("tidak ok");
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    },
  });

  return (
    <>
      {/* Form */}
      <Grid container spacing={3}>
        {/* Picture */}
        <Grid item xs={12} sm={6}>
          {/* Image Viewer */}
          <PreviewImages data={getUrls} />
        </Grid>

        <Grid item xs={6}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container direction={"column"} gap={2}>
              <Grid item xs>
                <TextField
                  id="title"
                  name="title"
                  label="Add Product's Name"
                  value={formik.values.title}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>

              <Grid item xs>
                <FormControl fullWidth>
                  <InputLabel id="brand">Brand</InputLabel>
                  <Select
                    label="brand"
                    name="brand"
                    value={formik.values.brand}
                    onBlur={formik.handleBlur}
                    onChange={(e) =>
                      formik.setFieldValue("brand", e.target.value)
                    }
                  >
                    {brands.map((e, i) => (
                      <MenuItem value={e} key={i}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth>
                  <InputLabel id="grade">Grade</InputLabel>
                  <Select
                    value={formik.values.grade}
                    onBlur={formik.handleBlur}
                    name="grade"
                    label="grade"
                    onChange={(e) =>
                      formik.setFieldValue("grade", e.target.value)
                    }
                  >
                    {grades.map((e, idx) => (
                      <MenuItem value={e} key={idx}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl fullWidth>
                  <InputLabel id="categories">Categories</InputLabel>
                  <Select
                    label="categories"
                    name="categories"
                    value={formik.values.category}
                    onBlur={formik.handleBlur}
                    onChange={(e) =>
                      formik.setFieldValue("category", e.target.value)
                    }
                  >
                    {categories.map((e, i) => (
                      <MenuItem value={e} key={i}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs>
              <Grid item xs>
                <TextField
                  id="year"
                  name="year"
                  label="Add Product's year"
                  value={formik.values.year}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </Grid>

              </Grid>

              <Grid item xs>
                <TextField
                  fullWidth
                  id="kiloMeter"
                  name="kiloMeter"
                  label="Input Kilometer"
                  value={formik.values.kiloMeter}
                  onChange={formik.handleChange}
                />
              </Grid>

              <Grid item xs>
                <TextareaAutosize
                  minRows={4}
                  maxRows={4}
                  placeholder="input your product's description"
                  style={{ width: 500 }}
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
          {urls.map((e,idx)=>(<h1 key={idx}>{e}</h1>))}
        </Grid>
      </Grid>
    </>
  );
}
