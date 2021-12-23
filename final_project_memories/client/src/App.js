import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import AddImage from './components/AddImage'
import WorkShop from "./components/WorkShop";
import View from './components/View';
import { Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#40464F'
            },
        },
    });

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Nav />

                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/workshop" element={<WorkShop />} />
                    <Route path="/workshop/addimage" element={<AddImage />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
