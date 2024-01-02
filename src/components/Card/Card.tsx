import { Beer } from "../../types/types"
import beerNotFound from '../../assets/images/beer_can_not_found.jpeg'
import './Card.scss'

// Beer object passed down from CardList allows Card access to object key: value pairs 
type CardProps = {
    beer: Beer;
}

//  beerNotFound is a image that is used if the beer does not have one
const Card = ({ beer }: CardProps) => {

    //  Regex to split the beer description at the first full stop, avoids decimals being split
    const regex = /(?<!\d)\.[\s\n]+(?=[A-Z])/;
    const shortBeerDescription = beer.description.split(regex)[0] + '.'

    return (
        <div className="card">
            <img className="card__image" src={beer.image_url ?? beerNotFound} alt={beer.name} />
            <h1 className="card__title">{beer.name}</h1>
            <h3 className="card__tagline">{beer.tagline}</h3>
            <p className="card__description">{shortBeerDescription}</p>
        </div>
    )
}

export default Card