import "./Card.css"
function Card({title, value}: {title: string, value: number}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}

export default Card;