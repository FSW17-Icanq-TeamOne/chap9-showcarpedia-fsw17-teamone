import { Button, TextField, Grid, Typography } from "@mui/material";
import { useFormik } from 'formik';
import Navbar2 from "../components/Navbar2";
import { loginValidationScheme } from '../utils/validationScheme'
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
          username: "",
          password: ""
        },
        onSubmit: (values) => {
        //   console.log(values, 'User is Logged In')
            fetch('http://localhost:4000/v1/login', {
                method: 'POST',
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
                localStorage.setItem('id', data.id);
                localStorage.setItem('role', data.role);
                localStorage.setItem('access_token', data.access_token);
                navigate("/")
            }
            })
            .catch((err) => {
            console.log(err);
            });
        },
        validationSchema: loginValidationScheme
      })

    return(
        <>
        <Navbar2 />
        
        <Grid container display={'flex'} direction={'column'} sx={{
            alignItems: 'center',
            margin: 'auto',
            maxWidth: 345
        }}>
            <Grid container justifyContent={'flex-start'}>
                <Typography variant='h4'>Log In</Typography>
            </Grid>

            <Grid container justifyContent={'center'} marginTop={'10px'}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid marginTop={'30px'}>
                        <TextField 
                            id="username"
                            name="username" 
                            label="Username" 
                            required
                            focused

                            sx={{ width: 345 }}

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
                            id="password"
                            name="password" 
                            label="Password" 
                            type={'password'}
                            required
                            focused

                            sx={{ width: 345 }}

                            // Value Handle
                            value={formik.values.password}
                            onChange={formik.handleChange}

                            // Throw Error
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>
                    <Grid container justifyContent={'center'} marginTop={'50px'}>
                        <Button sx={{ 
                            width: 345, 
                            height: 50, 

                            backgroundColor: 'orange',
                            color: 'white' 
                        }} type="submit" >Log In</Button>
                    </Grid>
                    <Grid container sx={{
                        display: 'flex',
                        direction: 'row',

                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px'
                    }} >
                        <Grid>
                            {/* <Link style={{ textDecoration: 'none'}}> */}
                                <Typography>Forgot Username?</Typography>
                            {/* </Link> */}
                        </Grid>
                        <Grid marginRight={'20px'} marginLeft={'20px'}>
                            {/* <Link style={{ textDecoration: 'none'}}> */}
                                <Typography>|</Typography>
                            {/* </Link> */}
                        </Grid>
                        <Grid>
                            <Typography>Forgot Password?</Typography>
                        </Grid>
                    </Grid>
                    <Grid marginTop={'25px'}>
                        <Typography variant="h6">OR</Typography>
                    </Grid>
                </form>
                <Grid container direction={"column"} mt={3} mb={4}>
                        <Grid item>
                            <Button type="submit" sx= {{
                                width:345, 
                                height: 50,
                                border: 1, 
                                borderColor: 'black',
                                
                            }} href={'/create-account'}> Create Account</Button>
                        </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        </>
    )
}
