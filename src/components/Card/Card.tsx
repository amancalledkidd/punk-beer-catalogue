import { Beer } from "../../types/types"

type CardProps = {
    beer: Beer;
}


const Card = ({ beer }: CardProps) => {
    return (
        <div className="card">
            <img className="card__image" src={beer.image_url} alt={beer.name} />
            <h1 className="card__title">{beer.name}</h1>
            <h3 className="card__tagline">{beer.tagline}</h3>
            <p className="card__description">{beer.description}</p>
        </div>
    )
}

export default Card