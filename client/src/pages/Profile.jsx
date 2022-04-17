import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import DashboardNavbar from "../components/DashboardNavbar";
import UserDashboardSidebar from "../components/UserDashboardSidebar";

export default function Profile() {
    const formik = useFormik({
        initialValues: {
            username: 'berbinarbinar',
            password: 'BerbinarBinar',
            email: 'binar@binar.com',
            fullName: 'Binar',
            mobilePhone: '08123456789',
            birthDate: '2022-04-17',
            country: 'Indonesia',
            city: 'Jakarta'
        }
    })

    return (
        <>
        <Grid container={true} display={'flex'}>
            <Grid marginRight={'220px'}>
                <UserDashboardSidebar />
            </Grid>
            <Grid container display={'flex'} alignItems={'center'}>
                <Grid marginLeft={'120px'} paddingTop={'30px'} >
                    <Typography variant={'h5'}>Profile</Typography>
                </Grid>

                <Grid ml={'auto'} >
                    <DashboardNavbar />
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
                        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'30px'}>
                            <Grid sx={{
                                width: 100,
                                height: 100,

                                backgroundColor: 'orange',

                                borderRadius: '50%'
                            }} />

                            <Grid>
                                <TextField 
                                    id='username'
                                    name='username' 

                                    value={formik.values.username} 
                                    variant='standard' 

                                    sx={{
                                        width: 175
                                    }}
                                />
                                {/* This should be a Link */}
                                <Typography variant={'body2'} marginTop={'10px'}>Change Profile Picture</Typography>
                            </Grid>
                        </Grid>

                        <Grid display={'flex'} justifyContent={'center'} marginTop={'40px'}>
                            <Grid>
                                <TextField 
                                    id='username'
                                    name='username'
                                    label='Username'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.username}
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
                                />
                            </Grid>

                            <Grid marginTop={'20px'}>
                                <TextField 
                                    id='fullName'
                                    name='fullName'
                                    label='Full Name'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.fullName}
                                />
                            </Grid>

                            <Grid marginTop={'20px'}>
                                <TextField 
                                    id='mobilePhone'
                                    name='mobilePhone'
                                    label='Mobile Phone'
                                    type='tel'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.mobilePhone}
                                />
                            </Grid>

                            <Grid marginTop={'20px'}>
                                <TextField 
                                    id='birthDate'
                                    name='birthDate'
                                    label='Birth Date'
                                    type='date'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.birthDate}
                                />
                            </Grid>

                            <Grid marginTop={'20px'}>
                                <TextField 
                                    id='country'
                                    name='country'
                                    label='Country'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.country}
                                />
                            </Grid>

                            <Grid marginTop={'20px'}>
                                <TextField 
                                    id='city'
                                    name='city'
                                    label='City'
                                    focused

                                    sx={{ width: '300px'}}

                                    value={formik.values.city}
                                />
                            </Grid>

                        </Grid>
                    </CardContent>
                </CardContent>
                
                <Grid display={'flex'} justifyContent={'center'}>
                    <Button 
                        href={'/edit/profile'}
                        sx={{
                            backgroundColor: 'orange',
                            color: 'white',

                            width: 300,
                            height: 40,

                            borderRadius: 20
                    }}>Edit Profile</Button>
                </Grid>
            </Card>

        </Grid>
        </>
    )
}