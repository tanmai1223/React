function Card(props) {
    return (
        <div className="card">
        <h1>{props.title}</h1>
        <p>{props.desp}</p>
        </div>
    )
}

export default Card;