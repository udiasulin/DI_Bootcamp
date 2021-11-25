const Jumbotron = (props) => {
    return (
        <div className="p-5 bg-light">
            <h1 className="mb-3">{props.title}</h1>
            <h4 className="mb-3">{props.description}</h4>
            <a className="btn btn-primary" href={props.buttonURL} role="button">{props.buttonLabel}</a>
        </div>
    )
}

export default Jumbotron;