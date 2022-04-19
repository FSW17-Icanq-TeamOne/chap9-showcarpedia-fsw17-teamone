import { Button, Grid, TextField, Typography } from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFormik } from "formik";
import { useState } from "react";
import Upload from "../components/uploadFile";
import { storage } from "../config/firebase";

export default function Create() {
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const getFile = (data) => {
    setUrls(data);
    console.log(urls)
  };
  const formik = useFormik({
    initialValues: {
      brand: "",
      year: "",
      kiloMeter: "",
      title: "",
      grade: "",
      category: "",
      description: "",
    },
   
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:4000/v1/cars", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          ...values,
          photoProducts: urls,
        }),
      });
      if(response.ok){
        console.log(response.json())
    }
    },
  });

  return (
    <Grid container justifyContent={"center"} marginTop={"10px"}>
      <form onSubmit={formik.handleSubmit}>
        <Grid marginTop={"30px"}>
          <TextField
            id="brand"
            name="brand"
            label="brand"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.brand}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="year"
            name="year"
            label="year"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.year}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="kiloMeter"
            name="kiloMeter"
            label="kiloMeter"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.kiloMeter}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="title "
            name="title"
            label="title"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="grade"
            name="grade"
            label="grade"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.grade}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="category"
            name="category"
            label="category"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.category}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <TextField
            id="description"
            name="description"
            label="description"
            required
            focused
            sx={{ width: 345 }}
            // Value Handle
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid marginTop={"30px"}>
          <Upload url={getFile} />
        </Grid>
        <Grid container justifyContent={"center"} marginTop={"50px"}>
          <Button
            sx={{
              width: 345,
              height: 50,

              backgroundColor: "orange",
              color: "white",
            }}
            type="submit"
          >
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
