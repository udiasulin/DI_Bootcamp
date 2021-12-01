import React from "react";
import './App.css';
import UserData from "./components/UserData";
import MoreData from "./components/MoreData";
import { BrowserRouter, Switch, Route, NavLink, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './components/ErrorBoundery';
import { useLocation } from 'react-router-dom'

class App extends React.Component {
    constructor() {
        super();
        this.errorMessage = this.errorMessage.bind(this);

        this.state = {
            title: '',
            author: '',
            genre: '',
            yearReleased: '',
            name: '',
            lastName: '',
            phone: '',
            email: '',
            resetCompoent: false,
            hasError: false
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        let inputs = e.target.getElementsByTagName('input')
        this.setState({
            title: inputs.title.value,
            author: inputs.author.value,
            genre: inputs.genre.value,
            yearReleased: inputs.yearPublished.value
        })
    }


    getData = (e) => {
        e.preventDefault()
        let inputs = e.target.getElementsByTagName('input')
        this.setState({
            name: inputs.firstName.value,
            lastName: inputs.lastName.value,
            phone: inputs.phoneNumber.value,
            email: inputs.emailAddress.value
        })
    }

    reset = () => {
        this.setState({
            name: '',
            lastName: '',
            phone: '',
            email: '',
            resetCompoent: true
        })
    }

    render() {


        console.log(this.state)

        if (this.state.title !== '') {
            return (
                <h1>Data Sent!</h1>
            )
        }

        if (this.state.resetCompoent) {
            return (
                <MoreData getData={this.getData} />
            )
        }

        if (this.state.lastName !== '') {
            return (
                <>
                    <div>
                        <p>{this.state.name}</p>
                        <p>{this.state.lastName}</p>
                        <p>{this.state.phone}</p>
                        <p>{this.state.email}</p>
                    </div>
                    <button className="btn btn-warning" onClick={this.reset}>Reset</button>
                </>
            )
        }

        return (
            <>
                {/* Exercise1 */}
                {/* <h1>New Book</h1>
                <UserData handleSubmit={this.handleSubmit} data={this.state} /> */}

                {/* Exercise2 */}
                {/* <MoreData getData={this.getData} /> */}

                <BrowserRouter>
                    <nav className="nav">
                        <NavLink className="nav-link" to="/">Home</NavLink >
                        <NavLink className="nav-link" to="profile">Profile</NavLink >
                        <NavLink className="nav-link" to="shop">Shop</NavLink >
                    </nav>
                    <Routes>
                        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
                        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
                        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
                    </Routes>
                </BrowserRouter>


            </>
        )



    }
}

function HomeScreen(props) {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

function ProfileScreen(props) {
    return (
        <>
            <h1>Profile Screen</h1>
        </>
    )
}

function ShopScreen(props) {
    const location = useLocation();

    if (location.pathname === '/shop') {
        throw new Error()
    }
    return (
        <>
        </>
    )
}

export default App
