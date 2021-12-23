import { Box } from '@mui/system';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button'
import axios from 'axios';
import Typography from '@mui/material/Typography'
import { currentUser } from '../redux/actions';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Registration = (props) => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginState, setloginStatus] = useState('')

    const login = () => {
        axios.post('http://localhost:5000/home/users/login', {
            user_name: username,
            password: password
        }).then(res => {
            if (res.data.length === 0) {
                setloginStatus('USER NOT FOUND')
            } else {
                setloginStatus(`Welecome ${res.data[0].user_name}`)
                dispatch(currentUser(res.data[0].user_id))
            }
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
                    onChange={(e) => { setUsername(e.target.value) }}
                    sx={{ width: '65%' , mt:'10%'}}
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    sx={{ width: '65%' }}
                />
                <Typography variant="h4" color="initial">{loginState}</Typography>
                <Button variant="contained" color="success" sx={{ width: '65%' }}
                    onClick={login}>
                    submit
                </Button>
                <Button sx={{ width: '65%' }} color="secondary" variant='contained' to="/register" component={Link}>register</Button>
            </Box>
        </>
    )

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        currentUser: (userId) => currentUser(userId)
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Registration);
