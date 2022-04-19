import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import MultipleImageUploader from "./MultipleImageUploader";

export default function ProductCreationForm() {
    const formik = useFormik({
        initialValues: {
            title: '',
            brand: ['Porsche', 'BMW', 'Ford', 'Toyota', 'Honda'],
            grade: [1, 2, 3, 4, 5],
            category: ['Sport', 'SUV', 'Pickup', 'Coupe',],
            year: Number(),
            kiloMeter: Number(),
            description: ''
        },
        onSubmit: value => {
            console.log(value, `Product is Created`)
        }
    })

    return (
        <>
        {/* Form */}
        <Grid display={'flex'} gap={'30px'}>
            <MultipleImageUploader />

            <form onSubmit={formik.onSubmit}>
                <Grid container display={'flex'} direction={'column'} gap={'30px'}>

                    <Grid>
                        <TextField 
                            id="title"
                            name='title'
                            label="Add Product's Name"
                            
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            variant='standard'

                            sx={{
                                width: 400
                            }}
                        />
                    </Grid>

                    <Grid display={'flex'} gap={'20px'}>
                        <Autocomplete 
                            disablePortal
                            id="brand"
                            name='brand'
                            
                            onChange={formik.handleChange}

                            options={formik.values.brand}
                            renderInput={params => <TextField {...params} label='Select Brand' required />}

                            sx={{
                                width: 345
                            }}
                        />

                        <Autocomplete 
                            disablePortal
                            id="grade"
                            name='grade'
                            
                            onChange={formik.handleChange}

                            options={formik.values.grade}
                            renderInput={params => <TextField {...params} label='Grade' required />}

                            sx={{
                                width: 95
                            }}
                        />
                    </Grid>

                    <Grid>
                        <Autocomplete 
                            disablePortal
                            id="category"
                            name='category'
                            
                            onChange={formik.handleChange}

                            options={formik.values.category}
                            renderInput={params => <TextField {...params} label='Category' required />}

                            sx={{
                                width: 345
                            }}
                        />
                    </Grid>

                    <Grid>
                        <TextField 
                            id="year"
                            name='year'
                            label="Input Product's Year"
                            
                            value={formik.values.year}
                            onChange={formik.handleChange}

                            sx={{
                                width: 345
                            }}
                        />
                    </Grid>

                    <Grid>
                        <TextField 
                            id="kiloMeter"
                            name='kiloMeter'
                            label="Input Kilometer"
                            
                            value={formik.values.kiloMeter}
                            onChange={formik.handleChange}

                            sx={{
                                width: 345
                            }}
                        />
                    </Grid>

                    <Grid>
                        <TextField 
                            id="description"
                            name='description'
                            label="Description"
                            multiline
                            
                            value={formik.values.description}
                            onChange={formik.onChange}

                            sx={{
                                width: 460
                            }}
                        />
                    </Grid>

                    <Grid>
                        <Button sx={{
                            width: 460,

                            borderRadius: 20,

                            backgroundColor: 'orange',
                            color: 'white'
                        }} type='submit'>Submit</Button>
                    </Grid>

                </Grid>
            </form>
            
        </Grid>
        </>
    ) 
}