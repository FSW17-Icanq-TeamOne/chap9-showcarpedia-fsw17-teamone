import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import DashboardNavbar from "../components/DashboardNavbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

export default function AdminRegisterAccount() {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:4000/v1/admin/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data, "This is the Data");
          if (data.message === "Success") {
            navigate("/adminList");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Grid container>
      <Dashboard />
      <Grid item xs>
        <Grid container spacing={2}>
          <Grid item sm={1} lg={2} />
          <Grid item xs={12} sm={10} lg={8}>
            <Card sx={{ minHeight: "calc(100vh - 64px)" }}>
              <CardContent>
                
                <form onSubmit={formik.handleSubmit}>
                  <Grid container columns={{xs:6,md:12}} spacing={{xs:3,sm:2}}>
                    <Grid item xs={6} md={12}>
                    <Typography variant={"h4"} textAlign="center" mt={10}>
                  Register Admin
                </Typography>
                    </Grid>

                    <Grid item xs={1} md={4} />
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="username"
                        name="username"
                        label="Username"
                        fullWidth
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.username &&
                          Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
                        }
                      />
                    </Grid>
                    <Grid item xs={1} md={4} />

                    <Grid item xs={1} md={4} />
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={1} md={4} />

                    <Grid item xs={1} md={4} />
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Grid>
                    <Grid item xs={1} md={4} />

                    <Grid item xs={1} md={4} />
                    <Grid item xs={4} md={4}>
                      <Button
                      fullWidth
                        type={"submit"}
                        sx={{
                          backgroundColor: "orange",
                          color: "white",
                          borderRadius: 20,
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={1} md={4} />
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={1} lg={2} />
        </Grid>
      </Grid>
      {/* <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'} >
                    <Typography variant={'h5'} marginLeft={'200px'}>Profile</Typography>
                </Grid>

            </Grid> */}
    </Grid>
  );
}
