import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import '../styles/nav.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
const Nav = () => {

    const userlogeding = useSelector(state => state.currUser)

    if (userlogeding !== null) {
        return (
            <>
                <AppBar className="nav" position="fixed">
                    <Toolbar>
                        <Avatar alt="Example Alt" src={logo} className='logo' />
                        <Typography variant="h6" sx={{ m: 2 }} color="primary">
                            MEMORIES BOOK
                        </Typography>
                        <Button className='btn' to="/home" component={Link}>Home</Button>
                        <Button className='btn' to="/view" component={Link}>view</Button>
                    </Toolbar>
                </AppBar>
            </>
        );
    } else {
        return (
            <>
                <AppBar className="nav" position="fixed">
                    <Toolbar>
                        <Avatar alt="Example Alt" src={logo} className='logo' size='large' />
                        <Typography variant="h6" sx={{ m: 2 }} color="primary">
                            MEMORIES BOOK
                        </Typography>
                        <Button className='btn' to="/register" component={Link}>register</Button>
                        <Button className='btn' to="/" component={Link}>login</Button>
                    </Toolbar>
                </AppBar>
            </>
        );
    }


}


const mapStateToProps = (state) => {

    return state;
};




export default connect(mapStateToProps, '')(Nav);