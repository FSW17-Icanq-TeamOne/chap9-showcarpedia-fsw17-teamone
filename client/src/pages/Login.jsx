import { Button, TextField, Grid, Typography } from "@mui/material";
import { useFormik } from 'formik';
import Navbar2 from "../components/Navbar2";
import { loginValidationScheme } from '../utils/validationScheme'

export default function LoginPage(){
    const formik = useFormik({
        initialValues:{
          username: "",
          password: ""
        },
        onSubmit: (values) => {
          console.log(values, 'User is Logged In')
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
                <Typography variant='h4'>Sign In</Typography>
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
                        }} type="submit" >Login</Button>
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
                                
                            }} href={'/registerAccount'}> Create Account</Button>
                        </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        </>
    )
}
