import { Button, Grid, Typography } from "@mui/material";
import MainNavbar from "../components/MainNavbar";
import './styles/Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BrandList from "../components/BrandList";
import Carousel from "../components/CarouselContainer"


export default function Home() {
    return (
        <>
        {/* First Page */}
        <Grid className="Home">
            <MainNavbar />
        </Grid>
        <Grid>
            <Carousel />
        </Grid>

        {/* Second Page */}
        <Grid className='AboutUs' container display={'flex'} direction={'row'} justifyContent={'center'} gap={'7.5%'}>
            <Grid>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        src="/broken-image.jpg"
                        sx={{ width: 230, height: 230 }}
                    />
                </Stack>
            </Grid>

            <Grid display={'flex'} flexDirection={'column'} gap={'35px'}>
                <Typography variant={'h4'}>ABOUT US</Typography>

                <Typography sx={{
                    width: 350
                }}>"Showcarpedia is a Car Showroom Website by TeamOne FSW17 Binar Academy"</Typography>
                <Typography></Typography>
                
                <Button sx={{
                    width: 140,
                    height: 50,
                    
                    backgroundColor: 'black',

                    color: 'white'
                }}>Contact Us</Button>
            </Grid>
        </Grid>

        {/* Third Page */}
        <Grid className="BrandList">
            <BrandList />
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