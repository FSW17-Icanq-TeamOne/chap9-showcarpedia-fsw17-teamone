import { Autocomplete, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import MainNavbar from '../components/MainNavbar'

export default function Collection() {
    const filterFormik = useFormik({
        initialValues: {
            brand: ['Toyota', 'Honda', 'Mitsubishi'],
            category: ['Sedan', 'Coupe', 'Sport', 'SUV'],
            grade: ['1', '2', '3', '4', '5']
        },
        onSubmit: values => {
            console.log(values, 'Filter')
        }
    })
    
    return (
        <>
        <MainNavbar />

        {/* Filter */}
        <Grid container display={'flex'} direction={"column"} alignItems={'center'} marginTop={'10px'}>
            <Grid container justifyContent={'center'} marginBottom={'20px'}>
                <Typography variant={'h5'}>Filter</Typography>
            </Grid>

            <Grid display={'flex'} gap={'20px'}>
                <Grid>
                    <Autocomplete
                        disablePortal
                        id='brand'
                        name='brand'

                        sx ={{ 
                            width: 325,
                            height: 50
                        }}

                        value={filterFormik.values.brand['']}
                        onChange={filterFormik.handleChange}

                        options={filterFormik.values.brand}
                        renderInput={(params) => <TextField {...params} label='Brand' focused/>}
                    />
                </Grid>

                <Grid>
                    <Autocomplete
                        disablePortal
                        id='category'
                        name='category'

                        sx ={{ 
                            width: 325,
                            height: 50
                        }}

                        value={filterFormik.values.category['']}
                        onChange={filterFormik.handleChange}

                        options={filterFormik.values.category}
                        renderInput={(params) => <TextField {...params} label='Category' focused/>}
                    />
                </Grid>

                <Grid>
                    <Autocomplete
                        disablePortal
                        id='grade'
                        name='grade'

                        sx ={{ 
                            width: 325,
                            height: 50
                        }}

                        value={filterFormik.values.grade['']}
                        onChange={filterFormik.handleChange}

                        options={filterFormik.values.grade}
                        renderInput={(params) => <TextField {...params} label='Grade' focused/>}
                    />
                </Grid>
            </Grid>

            <Grid display={'flex'} marginTop={'15px'}>
                <Grid>
                    <Button type="submit">Reset</Button>
                </Grid>

                <Grid>
                    <Button type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </Grid>


        {/* Collection List */}
        <Grid container display={'flex'} justifyContent={'center'} marginTop={'100px'} gap={'3%'}>
            <Grid>
                <Card sx={{
                    width: 390,
                    height: 490,

                    border: 1,
                    borderRadius: 2
                }}>
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
                </Card>
            </Grid>

            <Grid>
                <Card sx={{
                    width: 390,
                    height: 490,

                    border: 1,
                    borderRadius: 2
                }}>
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
                </Card>
            </Grid>

            <Grid>
                <Card sx={{
                    width: 390,
                    height: 490,

                    border: 1,
                    borderRadius: 2
                }}>
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
                </Card>
            </Grid>
        </Grid>

        </>
    )
}