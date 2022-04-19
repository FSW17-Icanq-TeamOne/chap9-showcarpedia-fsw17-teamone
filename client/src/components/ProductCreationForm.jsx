import { Grid } from "@mui/material"
import { useFormik } from "formik"

export default function ProductCreationForm() {
    const formik = useFormik({
        initialValues: {
            title: '',
            brand: ['Porsche', 'BMW', 'Toyota', 'Ford'],
            grade: [1, 2, 3, 4, 5],
            category: ['SUV', 'Sport', 'Pickup', 'Coupe'],
            year: '',
            kiloMeter: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <>
            <Grid>
                <Grid />
            </Grid>
        </>
    )
}