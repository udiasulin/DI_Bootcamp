import '../styles/Home.css'
import { getAlbums, deleteAlbum, AddAlbum } from '../redux/api';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Stack, Typography, Paper, IconButton, Fab, Modal, Box, TextField, Button } from "@mui/material";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import { currentAlbum } from '../redux/actions';

const Home = (props) => {

    const [open, setOpen] = React.useState(false);
    const albums = useSelector(state => state.data);
    const user = useSelector(state => state.currUser);
    const album = useSelector(state => state.albumName);
    
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false) };

    useEffect(() => {
        dispatch(getAlbums(user))
    }, [dispatch, user, album]);


    if (Array.isArray(albums)) {
        return (
            <>
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
                                <Paper elevation={3} key={index} className="albums">
                                    <Button variant="text" color="primary"
                                        to="/workshop" component={Link}
                                        onClick={(e) => {
                                            dispatch(currentAlbum(item.album_id))
                                        }}>
                                        {item.album_name}
                                    </Button>
                                    <IconButton color="error" size="large" aria-label="delete album" onClick={() => dispatch(deleteAlbum(item.album_id))}>
                                        <RemoveCircleRoundedIcon color="error" fontSize="large" />
                                    </IconButton>
                                </Paper>
                            )
                        })
                    }
                </Stack>
                <Fab aria-label="add" sx={{
                    ml: '70vw',
                    mt: 5,
                    backgroundColor: '#11cb5f',
                    color: 'white'
                }}>
                    <AddOutlinedIcon onClick={handleOpen} />
                </Fab>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='modal'>
                        <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ mt: 4 }}>
                            Please Enter name album
                        </Typography>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleClose()
                            dispatch(AddAlbum(e.target.elements.albumName.value, user))
                            dispatch(getAlbums(user))
                        }}>
                            <TextField
                                required
                                label="Album Name"
                                defaultValue=" "
                                name='albumName'
                                sx={{
                                    width: '35vw',
                                    ml: '5%'
                                }}
                            />
                            <Button type="submit" variant="contained" color="info"
                                sx={{
                                    width: '35vw',
                                    height: '5vh',
                                    mt: '4%',
                                    ml: '5%',
                                    mb: '5%'
                                }}>
                                START
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </>)
    } else {
        return (
            <>
                <Typography variant="h1" color="initial">you have no albums</Typography>
                <Fab aria-label="add" sx={{
                    ml: '70vw',
                    mt: 5,
                    backgroundColor: '#11cb5f',
                    color: 'white'
                }}>
                    <AddOutlinedIcon onClick={handleOpen} />
                </Fab>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='modal'>
                        <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ mt: 4 }}>
                            Please Enter name album
                        </Typography>
                        <form onSubmit={(e) => {
                            dispatch(AddAlbum(e.target.elements.albumName.value, user))
                        }}>
                            <TextField
                                required
                                label="Album Name"
                                defaultValue=" "
                                name='albumName'
                                sx={{
                                    width: '35vw',
                                    ml: '5%'
                                }}
                            />
                            <Button type="submit" variant="contained" color="info"
                                sx={{
                                    width: '35vw',
                                    height: '5vh',
                                    mt: '4%',
                                    ml: '5%',
                                    mb: '5%'
                                }}>
                                START
                            </Button>
                        </form>
                    </Box>
                </Modal>
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
        deleteAlbum: (id) => deleteAlbum(id),
        AddAlbum: (name) => AddAlbum(name),
        currentAlbum: (currAlbum) => currentAlbum(currAlbum)
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);
