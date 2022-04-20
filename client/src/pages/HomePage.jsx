import { Button, Container, Grid, Typography } from "@mui/material";
import MainNavbar from "../components/MainNavbar";
import '../styles/Home.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BrandList from "../components/BrandList";
import Carousel from "../components/CarouselContainer"
import HomeFooter from "../components/HomeFooter"


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
                        src="https://cdn.discordapp.com/attachments/960564590574456852/966305346257838130/103054527.jpeg"
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
                <HomeFooter />
        </Grid>
        </>
    )
}