import { Button,Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default function Show(){
    return(
        <Card sx={{
            height: 490,
            border: 1,
            borderRadius: 2
            
        }} >
            <CardActionArea>
                <CardMedia
                    component={'img'}
                    image={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*'}
                    alt={'Image'}

                    sx={{
                        height: 235,
                        width: 345,

                        display: 'flex',
                        justifyContent: 'center',

                        marginLeft: 2.5,
                        marginTop: 2.5,

                        borderRadius: 2
                    }}
                />
                <CardContent>
                    <Grid container display={'flex'} justifyContent={'flex-end'}>
                        <Typography marginBottom={'20px'}
                        sx={{
                            border: 1,
                            borderRadius: '50%',

                            width: 40,
                            height: 40,

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>W</Typography>
                    </Grid>

                    <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Typography>Description</Typography>
                    </Grid>

                    <Grid container display={'flex'} justifyContent={'center'} marginTop={'50px'}>
                        <Button
                            sx={{
                                width: 120,
                                height: 40,

                                borderRadius: 24,

                                color: 'white',

                                backgroundColor: 'orange'
                            }}
                        >View Detail</Button>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}