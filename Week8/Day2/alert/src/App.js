import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import Alert from './components/Alert'

function App() {

    const colorClasses = {
        green: 'alert alert-success',
        red: 'alert alert-danger',
        blue: 'alert alert-primary',
        orange: 'alert alert-warning',
    }




    return (<>
        <Alert text="OMG! Something really bad has happended!" show={false} color={colorClasses.red} />
        <Alert text="Good one!" show={true}  color={colorClasses.orange} />
        <Alert text="Good one!" show={true}  color={colorClasses.green} />
        <Alert text="Good one!" show={true}  color={colorClasses.skyblue} />
    </>
    )



}

export default App;
