import { connect } from 'react-redux';
import '../styles/view.css';
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper, Box, Grid, Button, Stack, IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import { getAlbums, getAllImages } from '../redux/api';
import { useEffect } from "react";
import { Image, Transformation } from 'cloudinary-react';
import React from 'react';

const View = (props) => {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [background, setBackground] = React.useState('');
    const albums = useSelector(state => state.data);
    const user = useSelector(state => state.currUser);
    const images = useSelector(state => state.images);

    useEffect(() => {
        dispatch(getAlbums(user))
    }, [dispatch, user]);


    const handlClick = (id) => {
        let savedData = localStorage.getItem('saved_data')
        let paresdSaveData = JSON.parse(savedData)

        setOpen(true)

        if (paresdSaveData !== null) {
            paresdSaveData.filter(item => {
                if (item.album_id === id) {
                    return setBackground(item.pickBackground)
                }
            })

        }

        dispatch(getAllImages(id))
    }

    if (!Array.isArray(albums)) {
        return <Typography variant="body1" color="initial">no albums</Typography>

    } else if (open) {
        return (
            <>
                <Box className='overlay' style={{ backgroundImage: `url(${background})`, }}>
                    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 2, sm: 4, md: 10 }} >
                        <IconButton variant="contained" color="error" aria-label="upload picture" component="span" className='close'
                            sx={{ boxShadow: 12 }}
                            onClick={() => setOpen(false)}
                        >
                            <CancelIcon />
                        </IconButton>
                        {
                            images.map((item, index) => {
                                return (
                                    <Grid item xs={2} sm={4} md={1.5} key={index} sx={{ mt: '5%', ml: '1%' }}>
                                        <Image cloudName="dslk6mmz4" publicId={item.image_name}>
                                            <Transformation border="2px_solid_rgb:ffffff" height="200" radius="0" crop="fill" />
                                        </Image>
                                    </Grid>

                                )
                            })
                        }
                    </Grid>
                </Box>

            </>
        )
    } else {
        return (
            <>
                <Box>
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                        sx={{ ml: '32%' }}
                    >
                        {
                            albums.map((item, index) => {
                                return (
                                    <Paper elevation={3} key={index} sx={{
                                        width: '35%',
                                    }}>
                                        <Button variant="text" color="primary"
                                            onClick={() => handlClick(item.album_id)}
                                            sx={{
                                                width: '100%'
                                            }}
                                        >
                                            {item.album_name}
                                        </Button>
                                    </Paper>
                                )
                            })
                        }
                    </Stack>
                </Box>

            </>
        )
    }



}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        getAlbums: () => getAlbums(),
        getAllImages: (album_id) => getAllImages(album_id)
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(View);




