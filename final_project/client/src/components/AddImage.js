import { Box, Button, Paper, Typography } from "@mui/material";
import React from 'react';
import { connect } from "react-redux";
import { uploadImageCloud, insertImage } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const AddImage = (props) => {

    const dispatch = useDispatch()
    const imageData = useSelector(state => state.ImageData)
    const currAlbum = useSelector(state => state.currAlbum)
    
    return (
        <>


            <Box className='fileModal'>
                <Paper variant="outlined" square
                    sx={{ width: '40vw', height: '10vh', ml: '15%', mt: '20%' }}
                >
                    <Typography variant="h6" color="initial">{imageData === null ? 'upload file' : imageData.original_filename}</Typography>
                </Paper>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ width: '34vw', height: '4vh', ml: '20%' }}
                    onChange={(event) => {
                        dispatch(uploadImageCloud(event.target.files[0]))
                    }}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                <Button
                    to="/workshop" component={Link}
                    variant="contained"
                    sx={{ width: '34vw', height: '4vh', ml: '20%' }}
                    onClick={() => dispatch(insertImage(imageData, currAlbum)
                    )}
                >
                    Add Image
                </Button>
            </Box>
        </>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        uploadImageCloud: (imageData, album_id) => uploadImageCloud(imageData, album_id),
        insertImage: (ImageData, album_id) => insertImage(ImageData, album_id)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddImage);