import { Box } from '@mui/system';
import { connect } from 'react-redux';
import '../styles/view.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button'
import axios from 'axios';
import { Typography } from '@mui/material';
import '../styles/Home.css'

const Registration = (props) => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        axios.post('http://localhost:5000/home/users', {
            user_name: usernameReg,
            password: passwordReg
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <Box className="login"
                sx={{
                    boxShadow: 3,
                    width: '45rem',
                    height: '25rem'
                }}>
                <TextField
                    id="outlined-input"
                    label="username"
                    type="text"
                    onChange={(e) => { setUsernameReg(e.target.value) }}
                    sx={{ width: '65%', mt: '15%' }}
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                    sx={{ width: '65%' }}
                />
                <Button variant="contained" color="success"
                    onClick={register}
                    sx={{ width: '65%' }}

                >
                    submit
                </Button>
            </Box>

        </>
    )

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Registration);
