import { Box, FormControl, Select, InputLabel, MenuItem, Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from '../config/firebase'
import { useNavigate } from "react-router-dom";

export default function ProductUpdateForm() {

    const navigate = useNavigate()

    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const dataURL = []

    const [productData, setproductData] = useState({
        title: '',
        brand: '',
        grade: '',
        category: '',
        year: '',
        kiloMeter: '',
        description: '',
        photoProducts: ''
    })

    let locPath = window.location.pathname,
    id = locPath.split('/');

    useEffect(() => {
        fetch(`http://localhost:4000/v1/cars/details/${id[2]}`, {
            credentials: "include",
        })
      .then((data) => data.json())
      .then((data) => setproductData(data))
      .catch((err) => console.log(err));
    }, [])



    useEffect(() => {
        if (!images) {
            setPreviews([
                'https://via.placeholder.com/600x400/f28329/ffffff?text=Upload+Image',
                'https://via.placeholder.com/600x400/f28329/ffffff?text=Upload+Image',
                'https://via.placeholder.com/600x400/f28329/ffffff?text=Upload+Image',
                'https://via.placeholder.com/600x400/f28329/ffffff?text=Upload+Image'
            ]);
            return;
        }
        images.map(image => {
            const objURL = URL.createObjectURL(image);
            setPreviews(prev => [...prev, objURL]);
            
            return () => URL.revokeObjectURL(objURL);
        });
    }, [images]);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];

            newImage.id = Math.random();

            setImages(prevState => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];

        images.map(image => {
            image.nameFile = new Date() + image.name;
            const storageRef = ref(storage, `multipleImages/${image.nameFile}`);

            const uploadTask = uploadBytesResumable(storageRef, image);
            promises.push(uploadTask);
            
            uploadTask.on(
                `state_changed`,
                snapshot => {
                    const prog = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(prog)
                },
                error => {
                    console.log(error)
                },
                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref)
                        .then(downloadURL => {
                            setUrls(prev => [...prev, downloadURL]);
                            console.log(`file available at `, downloadURL);
                            dataURL.push(downloadURL)
                            console.log("ini", dataURL)
                            formik.setFieldValue("photoProducts", dataURL)
                        })
                        .catch(error => console.log(error));
                }
            );
        });
        Promise.all(promises)
            .then(() => alert('File is successfully uploaded'))
            .catch(error => console.log(error))

        
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: productData?.title,
            brand: productData?.brand,
            grade: productData?.grade,
            category: productData?.category,
            year: productData?.year,
            kiloMeter: productData?.kiloMeter,
            description: productData?.description,
            photoProducts: productData?.photoProducts
        },
        onSubmit: value => {
            console.log(value, `Product is Created`)
            fetch(`http://localhost:4000/v1/cars/update/${id[2]}`, {
                method: 'PUT',
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(value),
            })
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            console.log(data, 'This is the Data')
            if (data.message === "Success"){
                navigate("/productList")
                window.location.reload();
            }
            })
            .catch((err) => {
            console.log(err);
            });
        }
    })

    return (
        <>
        {/* Form */}
        <Grid display={'flex'} gap={'30px'}>
            {/* Picture */}
            <Grid container display={'flex'} justifyContent={'center'} alignContent={'center'} 
                sx={{
                    width: 500,
                    height: 500,

                    border: 1
                }}
            >
                {/* Image Viewer */}
                <Grid display={'flex'} justifyContent={'center'} alignItems={''}
                    sx={{
                        width: 400,
                        height: 400
                    }}
                >
                    {urls.map((url, idx) => (
                        <img key={idx} style={{maxHeight: 100, maxWidth: 100}} src={url} lat={url} />
                    ))}
                </Grid>

                <Grid display={'flex'} justifyContent={'center'} alignItems={'baseline'}>
                    <progress 
                        value={progress} 
                        max='100%' 
                        style={{
                            width: 400
                        }}
                    />

                    {
                        previews.map((image, idx) => {
                            <img 
                                src={image}
                                key={idx}
                                style={{}}
                                alt={image.nameFile}
                            />
                        })
                    }
                </Grid>

                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <input type={'file'} multiple onChange={handleChange} />
                    <Button sx={{
                        width: 150,
                        
                        borderRadius: 20,

                        backgroundColor: 'orange',
                        color: 'white'
                    }} onClick={handleUpload}>Upload</Button>
                </Grid>
            </Grid>

            <form onSubmit={formik.handleSubmit}>
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
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel>Brand</InputLabel>
                        <Select
                        
                        id="brand"
                        name="brand"
                        sx={{
                            width: 345
                        }}
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                        >
                        <MenuItem value={"Porsche"}>Porsche</MenuItem>
                        <MenuItem value={"BMW"}>BMW</MenuItem>
                        <MenuItem value={"Ford"}>Ford</MenuItem>
                        <MenuItem value={"Toyota"}>Toyota</MenuItem>
                        <MenuItem value={"Honda"}>Honda</MenuItem>
                        </Select>
                        </FormControl>
                         </Box>

                         <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel>Grade</InputLabel>
                        <Select
                        id="grade"
                        name="grade"
                        sx={{
                            width: 95
                        }}
                        value={formik.values.grade}
                        onChange={formik.handleChange}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        </Select>
                        </FormControl>
                         </Box>

                        
                    </Grid>

                    <Grid>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                        
                        id="category"
                        name='category'
                        sx={{
                            width: 345
                        }}
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        >
                        <MenuItem value={"Sport"}>Sport</MenuItem>
                        <MenuItem value={"SUV"}>SUV</MenuItem>
                        <MenuItem value={"Pickup"}>Pickup</MenuItem>
                        <MenuItem value={"Coupe"}>Pickup</MenuItem>
                        </Select>
                        </FormControl>
                         </Box>
                       
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
                            onChange={formik.handleChange}

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