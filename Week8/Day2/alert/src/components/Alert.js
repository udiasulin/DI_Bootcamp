const Alert = (props) => {

    //exercise2
    // if (props.show) {
    //     return (
    //         <div class="alert alert-danger" role="alert">
    //             {props.text}
    //         </div>
    //     )
    // }

    //exercise2
    // return (<div>

    // </div>)

    //exercise3
    // if (props.color === 'Red') {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             {props.text}
    //         </div>
    //     )
    // }

    // if (props.color === 'Orange') {
    //     return (
    //         <div className="alert alert-warning" role="alert">
    //             {props.text}
    //         </div>
    //     )
    // }
    
    if (props.color === undefined) {
        alert('This color is not in the list')
    }
     
    return (

        <div className={props.color} role="alert">
            {props.text}
        </div>
    )

}



export default Alert;