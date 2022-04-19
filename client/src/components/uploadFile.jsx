import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Fab,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { Clear, Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";

export default function Upload({ url }) {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);

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

  const handleUpload = () => {
    const promises = [];
    files.map((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      promises.push(uploadTask);
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
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setUrls((prev) => [...prev, downloadUrl]);
            console.log(`file available at `, downloadUrl);
          });
        }
      ); 
    });
    Promise.all(promises)
      .then(() => {
        alert("success");
      })
      .catch((err) => console.log(err));
  };
  url(urls);
  console.log(files);
  return (
    <>
      <Box sx={{ width: "80vw", height: "60vh", border: "2px solid black" }}>
        <progress value={progress} max="100" />
        <Fab size="medium" color="secondary" aria-label="add">
          <label>
            <Add sx={{ marginTop: "5px" }} />
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleChange}
            />
          </label>
        </Fab>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {files.map((file, idx) => (
            <ImageListItem key={idx}>
              <img src={file.preview} alt={file} loading="lazy" />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={() => handleDelete(file.id)}
                  >
                    <Clear />
                  </IconButton>
                }
                actionPosition="right"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Button variant="contained" onClick={handleUpload}>
        Text
      </Button>
    </>
  );
}
