import { Input, Button, Card, CardContent, Grid, TextField, Typography, Avatar, Dialog, DialogContent, DialogTitle, DialogActions, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import DashboardUser from "../../components/Dashboard/DashboardUser";
import { UserSidebar } from "../../components/Dashboard/DashboardSidebarUser";
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Grow } from "@mui/material";



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default function Profile() {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
        handleUpload();
      };

    const [profile, setProfile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (!profile) {
          setPreview(
            // 'https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg'
            ''
          );
          return;
        }
        const objUrl = URL.createObjectURL(profile);
        setPreview(objUrl);
        return () => URL.revokeObjectURL(objUrl);
    }, [profile]);
    
    const handleChange = (e) => {
        if (!e.target.files) {
          setProfile(undefined);
        }
        setProfile(e.target.files[0]);
        //handleUpload();
      };
    
    const handleUpload = () => {
        const storageRef = ref(storage, `profileImages/${profile.name}`);

        const uploadTask = uploadBytesResumable(storageRef, profile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`file upload is ` + progress + ` % done`);
              switch (snapshot.state) {
                case 'paused':
                  console.log('upload is paused');
                  break;
                case 'running':
                  console.log('upload is running');
                  break;
                case 'error':
                  console.log('error happened');
                  break;
                case 'canceled':
                  console.log('upload is cancelled');
                  break;
                default:
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                console.log('file available at', downloadUrl);
                setUrl(downloadUrl);
                console.log("ini url", downloadUrl)
                formik.setFieldValue("profilePicture", downloadUrl)
              });
            }
        );
    }

    const navigate = useNavigate()
    
    const [profileData, setprofileData] = useState({
        fullName:"",
        mobilePhone:"",
        birthDate: "",
        country: "",
        city: "",
        profilePicture: ""
    })

    useEffect(() => {
        fetch('http://localhost:4000/v1/user/profile/', {
            credentials: "include",
        })
      .then((data) => data.json())
      .then((data) => setprofileData(data))
      .catch((err) => console.log(err));
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: profileData?.fullName,
            mobilePhone: profileData?.mobilePhone,
            birthDate:  profileData?.birthDate,
            country: profileData?.country,
            city:  profileData?.city,
            profilePicture: profileData?.profilePicture
        },
        onSubmit: values => {
            //console.log(values, 'UserUpdated')
            fetch('http://localhost:4000/v1/user/profile', {
                method: 'PUT',
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify(values),
            })
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            console.log(data, 'This is the Data')
            if (data.message === "Success"){
                navigate("/edit/profile")
                window.location.reload();
            }
            })
            .catch((err) => {
            console.log(err);
            });
        }
    })

    let previewPhoto = preview
    if (!previewPhoto){ previewPhoto = formik.values.profilePicture } else { previewPhoto = preview }
    
    const [isToggle, setIsToggle] = useState(true);
    const Component = React.forwardRef((props, ref) => {
      return (
        <div ref={ref} {...props}>
         < UserSidebar />
        </div>
      );
    })
    const handleToggle = (e) => {
      setIsToggle(e);
    };

    return (
        // <>
        // <Grid container={true} display={'flex'}>
        //     <Grid marginRight={'220px'}>
        //         <DashboardSidebarUser />
        //     </Grid>
        //     <Grid container display={'flex'} alignItems={'center'}>
        //         <Grid marginLeft={'120px'} paddingTop={'30px'} >
        //             <Typography variant={'h5'} marginLeft={'200px'}>Profile</Typography>
        //         </Grid>

        //         <Grid ml={'auto'} >
        //             <DashboardNavbar />
        //         </Grid>
        //     </Grid>
        // </Grid>

        // <Grid display={'flex'} justifyContent={'center'} marginTop={'50px'} marginLeft={'150px'}>
        //     <Card sx={{
        //         width: 700,
        //         height: 900
        //     }}>
        //         <CardContent>
        //             <CardContent>
        //                 <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'30px'}>
        //                     {/* <Grid sx={{
        //                         width: 100,
        //                         height: 100,

        //                         backgroundColor: 'orange',

        //                         borderRadius: '50%'
        //                     }} /> */}
        //                     <Avatar src={formik.values.profilePicture} sx={{ width: 100, height: 100 }} />
        //                     <Grid>
        //                         <TextField 
        //                             id='fullName'
        //                             name='fulName' 

        //                             value={formik.values.fullName} 
        //                             variant='standard' 

        //                             sx={{
        //                                 width: 175
        //                             }}
        //                         />
        //                         {/* This should be a Link */}
        //                         {/* <Typography variant={'body2'} marginTop={'10px'}>Change Profile Picture</Typography> */}
        //                         <br></br>
        //                         <br></br>
        //                         <Button  variant="contained"  onClick={handleClickOpen} startIcon={<PhotoCameraIcon />}>
        //                             Change Photo
        //                         </Button>
        //                         <BootstrapDialog
        //                             onClose={handleClose}
        //                             aria-labelledby="customized-dialog-title"
        //                             open={open}
        //                         >
        //                             <BootstrapDialogTitle width="250px" id="customized-dialog-title" onClose={handleClose}>
        //                                 Change Photo Profile
        //                             </BootstrapDialogTitle>

        //                             <DialogContent dividers>

        //                             {/* <input type='file' onChange={handleChange} /> */}
        //                             <Grid container spacing={2}>
        //                                 <Grid item xs={6}>
        //                                     {/* <Item> */}
        //                                         <Avatar src={previewPhoto} sx={{ width: 100, height: 100 }} />
        //                                     {/* </Item> */}
        //                                 </Grid>
        //                                 <Grid marginTop={4} item xs={4}>
        //                                     {/* <Item> */}
        //                                         <label htmlFor="contained-button-file">
        //                                             <Input style={{ display: 'none' }} accept="image/*" id="contained-button-file" type="file" onChange={handleChange} />
        //                                             <Button variant="contained" component="span">
        //                                                 Upload
        //                                             </Button>
        //                                         </label>
        //                                     {/* </Item> */}
        //                                 </Grid>
        //                             </Grid>
                                    
        //                             </DialogContent>
        //                             <DialogActions>
        //                             <Button autoFocus onClick={handleClose}>
        //                                 Save change
        //                             </Button>
        //                             </DialogActions>
        //                         </BootstrapDialog>
        //                     </Grid>
        //                 </Grid>

        //                 <Grid container display={'flex'} justifyContent={'center'} marginTop={'40px'}>
        //                     <form onSubmit={formik.handleSubmit}>
                                    
        //                         <Grid marginTop={'20px'}>
        //                             <TextField 
        //                                 id='fullName'
        //                                 name='fullName'
        //                                 label='Full Name'
        //                                 focused

        //                                 sx={{ width: '300px'}}

        //                                 value={formik.values.fullName}
        //                                 onChange={formik.handleChange}

        //                                 error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        //                                 helperText={formik.touched.fullName && formik.errors.fullName}
        //                             />
        //                         </Grid>

        //                         <Grid marginTop={'20px'}>
        //                             <TextField 
        //                                 id='mobilePhone'
        //                                 name='mobilePhone'
        //                                 label='Mobile Phone'
        //                                 type='tel'
        //                                 focused

        //                                 sx={{ width: '300px'}}

        //                                 value={formik.values.mobilePhone}
        //                                 onChange={formik.handleChange}

        //                                 error={formik.touched.mobilePhone && Boolean(formik.errors.mobilePhone)}
        //                                 helperText={formik.touched.mobilePhone && formik.errors.mobilePhone}
        //                             />
        //                         </Grid>

        //                         <Grid marginTop={'20px'}>
        //                             <TextField 
        //                                 id='birthDate'
        //                                 name='birthDate'
        //                                 label='Birth Date'
        //                                 type='date'
        //                                 focused

        //                                 sx={{ width: '300px'}}

        //                                 value={formik.values.birthDate}
        //                                 onChange={formik.handleChange}

        //                                 error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
        //                                 helperText={formik.touched.birthDate && formik.errors.birthDate}
        //                             />
        //                         </Grid>

        //                         <Grid marginTop={'20px'}>
        //                             <TextField 
        //                                 id='country'
        //                                 name='country'
        //                                 label='Country'
        //                                 focused

        //                                 sx={{ width: '300px'}}

        //                                 value={formik.values.country}
        //                                 onChange={formik.handleChange}

        //                                 error={formik.touched.country && Boolean(formik.errors.country)}
        //                                 helperText={formik.touched.country && formik.errors.country}
        //                             />
        //                         </Grid>

        //                         <Grid marginTop={'20px'}>
        //                             <TextField 
        //                                 id='city'
        //                                 name='city'
        //                                 label='City'
        //                                 focused

        //                                 sx={{ width: '300px'}}

        //                                 value={formik.values.city}
        //                                 onChange={formik.handleChange}

        //                                 error={formik.touched.city && Boolean(formik.errors.city)}
        //                                 helperText={formik.touched.city && formik.errors.city}
        //                             />
        //                         </Grid>

        //                         <Grid display={'flex'} justifyContent={'center'} marginTop={'40px'}>
        //                             <Button
        //                                 type={'submit'}
        //                                 sx={{
        //                                     backgroundColor: 'orange',
        //                                     color: 'white',

        //                                     width: 300,
        //                                     height: 40,

        //                                     borderRadius: 20
        //                             }}>Submit</Button>
        //                         </Grid>
        //                     </form>

        //                 </Grid>
        //             </CardContent>
        //         </CardContent>
                
        //     </Card>

        // </Grid>
        // </>
        <Grid container>
      <Grid item xs={12}>
        <DashboardUser toggle={handleToggle} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{display:isToggle ? "none" : "unset"}}
          >
            <Grow in={!isToggle}>
                <Component />
            </Grow>     
          </Grid>
          <Grid item xs={isToggle ? 12 : 10}>
            <Card sx={{minHeight:"calc(100vh - 64px)"}}>
            <CardContent>
                    <CardContent>
                        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'30px'}>
                            {/* <Grid sx={{
                                width: 100,
                                height: 100,

                                backgroundColor: 'orange',

                                borderRadius: '50%'
                            }} /> */}
                            <Avatar src={formik.values.profilePicture} sx={{ width: 100, height: 100 }} />
                            <Grid>
                                <TextField 
                                    id='fullName'
                                    name='fulName' 

                                    value={formik.values.fullName} 
                                    variant='standard' 

                                    sx={{
                                        width: 175
                                    }}
                                />
                                {/* This should be a Link */}
                                {/* <Typography variant={'body2'} marginTop={'10px'}>Change Profile Picture</Typography> */}
                                <br></br>
                                <br></br>
                                <Button  variant="contained"  onClick={handleClickOpen} startIcon={<PhotoCameraIcon />}>
                                    Change Photo
                                </Button>
                                <BootstrapDialog
                                    onClose={handleClose}
                                    aria-labelledby="customized-dialog-title"
                                    open={open}
                                >
                                    <BootstrapDialogTitle width="250px" id="customized-dialog-title" onClose={handleClose}>
                                        Change Photo Profile
                                    </BootstrapDialogTitle>

                                    <DialogContent dividers>

                                    {/* <input type='file' onChange={handleChange} /> */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            {/* <Item> */}
                                                <Avatar src={previewPhoto} sx={{ width: 100, height: 100 }} />
                                            {/* </Item> */}
                                        </Grid>
                                        <Grid marginTop={4} item xs={4}>
                                            {/* <Item> */}
                                                <label htmlFor="contained-button-file">
                                                    <Input style={{ display: 'none' }} accept="image/*" id="contained-button-file" type="file" onChange={handleChange} />
                                                    <Button variant="contained" component="span">
                                                        Upload
                                                    </Button>
                                                </label>
                                            {/* </Item> */}
                                        </Grid>
                                    </Grid>
                                    
                                    </DialogContent>
                                    <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Save change
                                    </Button>
                                    </DialogActions>
                                </BootstrapDialog>
                            </Grid>
                        </Grid>

                        <Grid container display={'flex'} justifyContent={'center'} marginTop={'40px'}>
                            <form onSubmit={formik.handleSubmit}>
                                    
                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='fullName'
                                        name='fullName'
                                        label='Full Name'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}

                                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                        helperText={formik.touched.fullName && formik.errors.fullName}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='mobilePhone'
                                        name='mobilePhone'
                                        label='Mobile Phone'
                                        type='tel'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.mobilePhone}
                                        onChange={formik.handleChange}

                                        error={formik.touched.mobilePhone && Boolean(formik.errors.mobilePhone)}
                                        helperText={formik.touched.mobilePhone && formik.errors.mobilePhone}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='birthDate'
                                        name='birthDate'
                                        label='Birth Date'
                                        type='date'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.birthDate}
                                        onChange={formik.handleChange}

                                        error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                                        helperText={formik.touched.birthDate && formik.errors.birthDate}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='country'
                                        name='country'
                                        label='Country'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.country}
                                        onChange={formik.handleChange}

                                        error={formik.touched.country && Boolean(formik.errors.country)}
                                        helperText={formik.touched.country && formik.errors.country}
                                    />
                                </Grid>

                                <Grid marginTop={'20px'}>
                                    <TextField 
                                        id='city'
                                        name='city'
                                        label='City'
                                        focused

                                        sx={{ width: '300px'}}

                                        value={formik.values.city}
                                        onChange={formik.handleChange}

                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                    />
                                </Grid>

                                <Grid display={'flex'} justifyContent={'center'} marginTop={'40px'}>
                                    <Button
                                        type={'submit'}
                                        sx={{
                                            backgroundColor: 'orange',
                                            color: 'white',

                                            width: 300,
                                            height: 40,

                                            borderRadius: 20
                                    }}>Submit</Button>
                                </Grid>
                            </form>

                        </Grid>
                    </CardContent>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
}