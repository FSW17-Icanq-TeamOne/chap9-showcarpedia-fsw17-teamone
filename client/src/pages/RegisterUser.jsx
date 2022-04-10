import { Button, Grid, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";

export default function RegisUser() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values, 'User is Registered');
        }
    })

    
    return (
        <Grid display={'flex'} flexDirection={'column'}>
            <Grid container justifyContent={'center'}> 
                <Typography variant="h3" marginTop={'50px'}>Create Account</Typography>
            </Grid>

            <Grid container justifyContent={'center'} marginTop={'30px'}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid marginTop={'30px'}>
                        <TextField 
                            id='username'
                            name="username"
                            label='Username'
                            required
                            focused

                            sx={{
                                width: 345 
                            }}

                            // Value Handle
                            value={formik.values.username}
                            onChange={formik.handleChange}

                            // Throw Error:
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <TextField 
                            id='email'
                            name="email"
                            label='Email Address'
                            required
                            focused

                            sx={{
                                width: 345 
                            }}

                            // Value Handle
                            value={formik.values.email}
                            onChange={formik.handleChange}

                            // Throw Error:
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    
                    <Grid marginTop={'30px'}>
                        <TextField 
                            id='password'
                            name="password"
                            label='Password'
                            type={'password'}
                            required
                            focused

                            sx={{
                                width: 345
                            }}

                            // Value Handle
                            value={formik.values.password}
                            onChange={formik.handleChange}

                            // Throw Error:
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>

                    <Grid container justifyContent={'center'} marginTop={'35px'}>
                        <Button 
                            sx={{ 
                                width: 345, 
                                backgroundColor: 'orange',
                                color: 'white'
                            }}
                            type="submit">Submit</Button>
                    </Grid>

                </form>
            </Grid>
        </Grid>
    )
}