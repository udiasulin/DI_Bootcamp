
function BootstrapCard(props) {
    return (
        props.data.map((singer, i) => {
            return < div className="card m-5" key={i} style={{ width: '30rem' }}>
                <img className="card-img-top" src={singer.imageUrl} alt="Card  cap" />
                <div className="card-body">
                    <h5 className="card-title">{singer.title}</h5>
                    <p className="card-text">{singer.description}</p>
                    <a href={singer.buttonUrl} className="btn btn-primary">{singer.buttonLabel}</a>
                </div>
            </div >
        })
    );
}

export default BootstrapCard;