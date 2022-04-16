import { Button, Grid, Typography } from "@mui/material";
import MainNavbar from "../components/MainNavbar";
import './styles/Home.css'

export default function Home() {
    return (
        <>
        {/* First Page */}
        <Grid className="Home">
            <MainNavbar />

            <Grid>
                <Typography>Flicking</Typography>
            </Grid>

            <Grid display={'flex'} sx={{
                marginTop: 25,
                marginRight: 5,
                marginLeft: 5
            }}>
                <Button sx={{
                    mr: 'auto',

                    color: 'white'
                }}>prev</Button>
                <Button sx={{
                    color: 'white'
                }}>next</Button>
            </Grid>
        </Grid>

        {/* Second Page */}
        <Grid className='AboutUs' container display={'flex'} direction={'row'} justifyContent={'center'} gap={'7.5%'}>
            <Grid sx={{
                border: 1,
                borderRadius: '50%',

                height: 230,
                width: 230
            }}/>

            <Grid display={'flex'} flexDirection={'column'} gap={'35px'}>
                <Typography variant={'h4'}>About Us</Typography>

                <Typography sx={{
                    width: 550
                }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>

                
                <Button sx={{
                    width: 140,
                    height: 50,
                    
                    backgroundColor: 'orange',

                    color: 'white'
                }}>Contact Us</Button>
            </Grid>
        </Grid>

        {/* Third Page */}
        <Grid className='OurBrands' container display={'flex'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant="h4">Our Brands</Typography>
            
            <Grid container display={'flex'} gap={'5%'} justifyContent={'center'} marginTop={'60px'}>
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
                <Grid sx={{
                    width: 80,
                    height: 80,
                    
                    backgroundColor: 'orange'
                }} />
            </Grid>
        </Grid>

        {/* Fourth Page */}
        <Grid className='Footer' container display={'flex'} direction={'column'} justifyContent={'center'} >
            <Grid container display={'flex'} direction={'column'}>
                <Grid container display={'flex'} direction={'row'} alignItems={'center'}>
                    <Grid container display={'flex'} alignItems={'center'} direction={'row'} marginBottom={'25px'} >
                        <Grid sx={{
                            marginRight: 5,
                            marginLeft: 5,
                            
                            backgroundColor: 'orange',
                            borderRadius: '50%',
                            
                            width: 90,
                            height: 90
                        }} />
                        <Typography variant={'h5'} sx={{
                            marginRight: 10,
                        }}>Company's Name</Typography>

                    <Typography variant='h4' sx={{
                        ml: 'auto',

                        padding: 5
                    }}>Blach Blach Blah Balch</Typography>
                    </Grid>
                </Grid>

                <Grid display={'flex'} justifyContent={'center'}>
                    <hr />
                </Grid>

                <Grid display={'flex'} alignItems={'center'} marginTop={'35px'}>
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                    <Grid sx={{
                        mr: 'auto',

                        marginLeft: 10,
                        
                        backgroundColor: 'orange',
                        borderRadius: '50%',
                        
                        width: 50,
                        height: 50
                    }} />
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}