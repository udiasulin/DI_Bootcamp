import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import '../styles/nav.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Nav = () => {

    return (
        <>
            <AppBar className="nav" position="fixed">
                <Toolbar>
                    <Avatar alt="Example Alt" src={logo} className='logo' />
                    <Typography variant="h6" sx={{ m: 2 }} color="primary">
                        MEMORIES BOOK
                    </Typography>
                    <Button className='btn' to="/workshop" component={Link}>WORK SHOP</Button>
                    <Button className='btn' to="/" component={Link}>Home</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav