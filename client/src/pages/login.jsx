import { Button, Card, TextField, Grid, Typography } from "@mui/material";
import { useFormik } from 'formik'
import * as yup from 'yup'
import './login.css'

const loginValidationSchema = yup.object({
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
  })

export function LoginPage(){
    const formik = useFormik({
        initialValues:{
          username: "",
          password: ""
        },
        onSubmit: (values) => {
          console.log(values)
        },
        validationSchema: loginValidationSchema
      })

    return(
        <form onSubmit={formik.handleSubmit}>
        <Grid alignItems="center" container direction="column" mt={15}>
           <Card sx={{ minWidth:400 }}>
                <Grid container direction="row" marginLeft={6}>
                    <h1>Sign In</h1>
                </Grid>
                <Grid container direction="column" >
                    <Grid item>
                        <Grid item m={2}>
                        <TextField 
                        id="username"
                        name="username" 
                        label="Username" 
                        required
                        focused
                        sx={{ width: 300 }}
                        variant="outlined" 
                        size="small"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item m={2}>
                        <TextField 
                        id="password"
                        name="password" 
                        label="Password" 
                        required
                        focused
                        sx={{ width: 300 }}
                        variant="outlined" 
                        size="small"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction={"column"} mt={3}>
                    <Grid item>
                        <Button type="submit" variant="contained" sx= {{ minWidth:300, backgroundColor: 'orange' }}> Login</Button>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} mt={2}>
                    <Grid item ml={7}>
                       {/* <Link style={{ textDecoration: 'none'}}> */}
                           <p>Forgot Email?</p>
                       {/* </Link> */}
                    </Grid>
                    <Grid item ml={6}>
                       {/* <Link style={{ textDecoration: 'none'}}> */}
                           <p>|</p>
                       {/* </Link> */}
                    </Grid>
                    <Grid item ml={4}>
                        <p>Forgot Password?</p>
                    </Grid>
                </Grid>
                <Grid mt={1}>
                    <Typography variant="h6" sx={{ fontSize: '15px'}}>OR</Typography>
                </Grid>
                <Grid container direction={"column"} mt={3} mb={4}>
                    <Grid item>
                        <Button type="submit" variant="contained" sx= {{  minWidth:300, backgroundColor: 'gray'}}> Create Account</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
        </form>
    )
}
