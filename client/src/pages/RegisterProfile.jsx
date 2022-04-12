import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { profileRegistrationScheme } from "../utils/validationScheme";

export default function RegisProfile() {
    const formik = useFormik({
        initialValues: {
            selectCountry: ['Spain', 'France', 'Indonesia', 'England'],
            selectCity: ['Madrid', 'Paris', 'Jakarta', "London"],
            fullName: '',
            mobilePhone: '',
            birthDate : '' 
        },
        onSubmit: values => {
            console.log(values, 'Profile is created')
        },
        validationSchema: profileRegistrationScheme
    })


    return (
        <Grid container display={'flex'} direction={'column'} sx={{
            alignItems: 'center',
            margin: 'auto',
            maxWidth: 354
        }}>
            <Grid container justifyContent={'flex-start'}>
                <Typography variant="h4">Create Profile</Typography>
            </Grid>

            <Grid container justifyContent={'center'} marginTop={'10px'}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid marginTop={'30px'}>
                        <Autocomplete 
                            disablePortal
                            id='selectCountry'
                            name='selectCountry'

                            value={formik.values.selectCountry['']}
                            onChange={formik.handleChange}

                            options={formik.values.selectCountry}
                            renderInput={(params) => <TextField {...params} label='Country' required focused />}

                            sx={{
                                width: 345
                            }}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <Autocomplete 
                            disablePortal
                            id='selectCity'
                            name='selectCity'

                            value={formik.values.selectCity['']}
                            onChange={formik.handleChange}

                            options={formik.values.selectCity}
                            renderInput={(params) => <TextField {...params} label='City' required focused />}

                            sx={{
                                width: 345
                            }}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <TextField
                            id="fullName"
                            name="fullName"
                            label='Full Name'
                            required
                            focused

                            sx={{
                                width: 345
                            }}

                            value={formik.values.fullName}
                            onChange={formik.handleChange}

                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <TextField
                            id="mobilePhone"
                            name="mobilePhone"
                            label='Mobile Phone'
                            required
                            focused

                            type={'tel'}

                            sx={{
                                width: 345
                            }}

                            value={formik.values.mobilePhone}
                            onChange={formik.handleChange}

                            error={formik.touched.mobilePhone && Boolean(formik.errors.mobilePhone)}
                            helperText={formik.touched.mobilePhone && formik.errors.mobilePhone}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <TextField
                            id="birthDate"
                            name="birthDate"
                            label='Birth Date'
                            required
                            focused

                            type={'date'}

                            sx={{
                                width: 345
                            }}

                            value={formik.values.birthDate}
                            onChange={formik.handleChange}

                            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                            helperText={formik.touched.birthDate && formik.errors.birthDate}
                        />
                    </Grid>

                    <Grid container justifyContent={'center'} marginTop={'50px'}>
                        <Button 
                            sx={{ 
                                width: 345, 
                                height: 50,
                                backgroundColor: 'orange',
                                color: 'white'
                            }}
                            // href={'/hello'}
                            type="submit">Create Account</Button>
                    </Grid>

                    <Grid marginTop={'25px'}>
                        <Typography variant="h6">OR</Typography>
                    </Grid>

                    <Grid container justifyContent={'center'} marginTop={'25px'}>
                        <Button 
                            sx={{ 
                                width: 345,
                                height: 50,
                                color: 'black',
                                
                                border: 1,
                                borderColor: 'black'
                            }}
                            // href={'/login'}
                            type="submit">Sign In</Button>
                    </Grid>

                </form>
            </Grid>
        </Grid>
    )
}