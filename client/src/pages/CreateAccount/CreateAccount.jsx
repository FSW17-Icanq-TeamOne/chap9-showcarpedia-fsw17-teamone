import { Button, Grid, TextField, Typography, } from "@mui/material";
import { useFormik } from "formik";
import '../../App.css'
import SecondNavbar from "../../components/NavigationBar/SecondNavbar";
import { accountRegistrationScheme } from "../../utils/validationScheme";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            //console.log(values, 'User is Registered');
            fetch('http://localhost:4000/v1/register', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(values),
            })
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            //console.log(data, 'This is the Data')
            navigate("/login");
            })
            .catch((err) => {
            console.log(err);
            });
        },
        validationSchema: accountRegistrationScheme
    })

    
    return (
        <>
        <SecondNavbar />

        <Grid container display={'flex'} direction={'column'} sx={{
            alignItems: 'center',
            margin: 'auto',
            maxWidth: 345,
        }}>
            <Grid container justifyContent={'flex-start'}> 
                <Typography variant="h4">Create Account</Typography>
            </Grid>

            <Grid container justifyContent={'center'} marginTop={'10px'}>
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

                            // Throw Error
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                    </Grid>

                    <Grid marginTop={'30px'}>
                        <TextField 
                            id='email'
                            name="email"
                            label='Email Address'
                            type='email'
                            required
                            focused

                            sx={{
                                width: 345 
                            }}

                            // Value Handle
                            value={formik.values.email}
                            onChange={formik.handleChange}

                            // Throw Error
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

                            // Throw Error
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
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
                            href={'/login'}
                            type="submit">Sign In</Button>
                    </Grid>

                </form>
            </Grid>
        </Grid>
        </>
    )
}