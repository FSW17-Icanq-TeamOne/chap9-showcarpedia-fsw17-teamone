import { Button, Grid } from "@mui/material"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { storage } from "../config/firebase";

export default function ProductCreationForm() {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const [dwnldUrl, setDwnldUrl] = useState();

    useEffect(() => {
        if (!image) {
            setPreview('https://via.placeholder.com/600x400/ff0000/ffffff?text=Hello+MF')
            return;
        }
        const objURL = URL.createObjectURL(image)
        setPreview(objURL)
        return () => URL.revokeObjectURL(objURL)
    }, [image])

    const handleChange = (event) => {
        if (!event.target.file || event.target.files.length === 0) {
            setImage(undefined)

        }
        setImage(event.target.files[0])
    }

    const handleUpload = (event) => {
        const storageRef = ref(storage, `images/${image.name}`);

        const uploadTask = uploadBytesResumable(storageRef);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            console.log(`File upload is ` + progress + ` % done`);

            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is Paused')
                    break;
                case 'running':
                    console.log('Upload is Running')
                    break;
                case 'error':
                    console.log('Upload is Error');
                    break;
                case 'canceled':
                    console.log('Upload is Cancelled');
                    break;
                default:
                    break;
            }
        }, (error) => {
            console.log(error)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadUrl) => {
                    console.log('file available at', downloadUrl)
                    setDwnldUrl(dwnldUrl);
                })
        })
    }
    
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
                <img src={preview} alt='image' style={{ width: 300 }}/>
                <input type='file' onChange={handleChange} />
                <Button onClick={handleUpload}>Upload</Button>
            </Grid>
        </>
    )
}