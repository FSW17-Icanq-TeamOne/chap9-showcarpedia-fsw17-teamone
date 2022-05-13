import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from "@mui/material";
import { Clear, Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";
import { LinearProgress } from "@mui/material";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useRef } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function PreviewImages({ data }) {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    files.map((file) => {
      return () => URL.revokeObjectURL(file.preview);
    });
  }, [files]);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage.id = Math.random();
      newImage.preview = URL.createObjectURL(newImage);
      setFiles((prevState) => [...prevState, newImage]);
    }
  };

  const handleDelete = (id) => {
    const newFiles = [...files];
    setFiles(newFiles.filter((file) => file.id !== id));
  };

  const handleUpload = async () => {
    const promises = []
 files.forEach((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // set progress
          const progressss = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressss);
        },
        (error) => {
          console.log(error);
        }
      )
       promises.push(getDownloadURL(uploadTask.snapshot.ref))
       
    });
    try {
      const urls = await Promise.all(promises)
      data(urls)
    } catch (error) {
      console.log(error)
    }
 
    
     
  };

  return (
    <>
      <Card sx={{ border: "2px dashed black", width: 500, height: 450 }}>
        <LinearProgress variant="determinate" value={progress} max="100" />
        <CardActionArea onClick={handleInput}>
          {!files.length ? (
            <Box
              height={450}
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <AddPhotoAlternateIcon fontSize="large" />
              <Typography variant="h4">click here to add images</Typography>
            </Box>
          ) : (
            <ImageList
              sx={{ width: 500, height: 450, padding: 1 }}
              cols={3}
              rowHeight={164}
            >
              {files.map((file, idx) => (
                <ImageListItem key={idx}>
                  <img src={file.preview} alt={file} loading="lazy" />
                  <ImageListItemBar
                    sx={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                        "rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)",
                    }}
                    position="top"
                    actionIcon={
                      <IconButton
                        sx={{ color: "white" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(file.id);
                        }}
                      >
                        <Clear />
                      </IconButton>
                    }
                    actionPosition="right"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleChange}
          />
        </CardActionArea>
      </Card>
      <Button variant="contained" onClick={handleUpload}>
        Text
      </Button>
    </>
  );
}
