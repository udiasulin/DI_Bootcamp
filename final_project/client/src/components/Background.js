import { Modal, Box, Typography, Grid, Button } from "@mui/material";
import React from 'react';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import '../styles/WorkShop.css'
import { setBackground } from "../redux/actions";

const Background = (props) => {

    const dispatch = useDispatch()

    return (
        <>
            <Modal
                open={props.show}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='backgroundModal'>
                    <Typography variant="h4" color="primary" sx={{ mb: 2, mt: 2 }}>Pick Background</Typography>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {props.backgrounds.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Button className="circle" key={item.image_url}
                                    sx={{ boxShadow: 6 }}
                                    style={{
                                        backgroundImage: `url(${item.image_url})`
                                    }}
                                    onClick={() => dispatch(setBackground(item.image_url))} />

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        setBackground: (background) => setBackground(background)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Background);