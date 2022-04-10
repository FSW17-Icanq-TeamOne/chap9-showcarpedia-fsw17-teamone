import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import * as React from "react";

export default function RegisProfile() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false
    });

    const handleChange= (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid display={'flex'} justifyContent={'center'}>
            <Typography variant="h3" marginTop={'50px'}>Create Account</Typography>

            <Grid>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput 
                        id='password'
                        type={values.showPassword ? 'text' : 'password'}
                        values={values.password}

                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}