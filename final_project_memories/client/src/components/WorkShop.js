import '../styles/WorkShop.css'
import { connect } from 'react-redux';
import { Box } from '@mui/system';
import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import Background from './Background';
import { getAllImages, getBackgrounds } from '../redux/api';
import { useSelector } from "react-redux";
import { Grid } from '@mui/material';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const WorkShop = (props) => {

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const currAlbum = useSelector(state => state.currAlbum)

    useEffect(() => {
        dispatch(getAllImages(currAlbum))
        dispatch(getBackgrounds())
    }, [dispatch, currAlbum]);

    const images = useSelector(state => state.images)
    const allState = useSelector(state => state)


    const saveToLocalStorage = (data) => {
        let savedData = JSON.parse(localStorage.getItem('saved_data')) || [];

        let albumSave = {
            album_id: data.currAlbum,
            images: data.images,
            pickBackground: data.pickBackground
        }

        savedData.push(albumSave)

        localStorage.setItem('saved_data', JSON.stringify(savedData))

    }


    const actions = {
        backgournd: { icon: <WallpaperIcon />, tooltip: 'Add background' },
        save: { icon: <SaveIcon />, tooltip: 'save' },
        image: { icon: (<Link to="/workshop/addimage"><AddCircleOutlineIcon /></Link>), tooltip: 'Add image' }
    };


    if (images.length === 0) {
        return (
            <>
                <SpeedDial
                    ariaLabel="SpeedDial uncontrolled open example"
                    sx={{ position: 'absolute', bottom: 60, right: 46 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    <SpeedDialAction icon={actions.image.icon} tooltipTitle={actions.image.tooltip} />
                    <Background show={modal} close={() => setModal(false)} />
                </SpeedDial>
            </>
        )
    } else {
        return (
            <>
                <Box className="view" sx={{ boxShadow: 3 }}
                    style={{
                        backgroundImage: `url(${props.pickBackground})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',

                    }}>
                    <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 2, sm: 4, md: 8 }} >
                        {
                            images.map((item, index) => {
                                return (
                                    <Grid item xs={2} sm={4} md={1} key={index} sx={{ mt: '1%', ml: '1%' }}>
                                        <Image cloudName="dslk6mmz4" publicId={item.image_name}>
                                            <Transformation border="2px_solid_rgb:ffffff" height="200" radius="0" crop="fill" />
                                        </Image>
                                    </Grid>

                                )
                            })
                        }
                    </Grid>
                    <SpeedDial
                        ariaLabel="SpeedDial uncontrolled open example"
                        sx={{ position: 'absolute', bottom: 60, right: 46 }}
                        icon={<SpeedDialIcon />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        <SpeedDialAction icon={actions.backgournd.icon} tooltipTitle={actions.backgournd.tooltip} onClick={() => setModal(true)} />
                        <SpeedDialAction icon={actions.image.icon} tooltipTitle={actions.image.tooltip} />
                        <SpeedDialAction icon={actions.save.icon} tooltipTitle={actions.save.tooltip} onClick={() => { saveToLocalStorage(allState) }} />
                        <Background show={modal} close={() => setModal(false)} />
                    </SpeedDial>
                </Box>
            </>
        );

    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        getAllImages: (album_id) => getAllImages(album_id),
        getBackgrounds: () => getBackgrounds()
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(WorkShop);




