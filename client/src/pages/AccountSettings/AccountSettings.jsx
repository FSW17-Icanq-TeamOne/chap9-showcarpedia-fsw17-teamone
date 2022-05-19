import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import DashboardUser from "../../components/Dashboard/DashboardUser";
import { UserSidebar } from "../../components/Dashboard/DashboardSidebarUser";
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

export default function AccountSettings() {
    
    const navigate = useNavigate()

    const [accountData, setaccountData] = useState({
        username:"",
        email:"",
        password:"",
    })

    useEffect(() => {
        fetch('http://localhost:4000/v1/user/account/', {
            credentials: "include",
        })
      .then((data) => data.json())
      .then((data) => setaccountData(data))
      .catch((err) => console.log(err));
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: accountData?.username,
            email: accountData?.email,
            password: ""
        },
        onSubmit: values => {
            //console.log(values, 'AccountUpdated')
            fetch('http://localhost:4000/v1/user/account', {
                method: 'PUT',
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(values),
            })
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            console.log(data, 'This is the Data')
            if (data.message === "Success"){
                navigate("/edit/account")
            }
            })
            .catch((err) => {
            console.log(err);
            });
        }
    })

    return (
        <>
        <Grid container={true} display={'flex'}>
            {/* <Grid marginRight={'220px'}>
                <UserSidebar />
            </Grid> */}
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'} >
                    <Typography variant={'h5'} marginLeft={'200px'}>Profile</Typography>
                </Grid>

                <Grid ml={'auto'} >
                    <DashboardUser />
                </Grid>
            </Grid>
        </Grid>

        <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
            <Card sx={{
                width: 700,
                height: 900
            }}>
                <CardContent>
                    <CardContent>
                        <Grid container display={'flex'} justifyContent={'center'} marginTop={'40px'}>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid>
                                    <TextField 
                                        id='username'
                                        name='username'
                                        label='Username'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.username}
                                        onChange={formik.handleChange}

                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='email'
                                        name='email'
                                        label='Email Address'
                                        type='email'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.email}
                                        onChange={formik.handleChange}

                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='password'
                                        name='password'
                                        label='Password'
                                        type='password'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.password}
                                        onChange={formik.handleChange}

                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Grid>

                                <Grid display={'flex'} justifyContent={'center'} marginTop={'40px'}>
                                    <Button
                                        type={'submit'}
                                        sx={{
                                            backgroundColor: 'orange',
                                            color: 'white',

                                            width: 300,
                                            height: 40,

                                            borderRadius: 20
                                    }}>Submit</Button>
                                </Grid>
                            </form>
                        </Grid>
                    </CardContent>
                </CardContent>
                
            </Card>

        </Grid>
        </>
    )
}