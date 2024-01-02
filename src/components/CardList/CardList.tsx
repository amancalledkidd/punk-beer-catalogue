import { Beer } from "../../types/types"
import { Link } from "react-router-dom";
import Card from "../Card/Card"
import './CardList.scss'

// Card list takes array of beer objects
type CardListProp = {
    beers: Beer[];
}

// CardList iterates through each Beer object in array
// Each beer object is injected into a card
// Each card is wrapped in a link which will take user to a BeerInfo Page
const CardList = ({ beers }: CardListProp) => {

    if (beers.length === 0) return (<p>No beers over here, please adjust your search parameters.</p>)

    return (
        <div className="card-list">
            {beers.map(beer => 
            <div className="card-list__card">
                <Link  to={`beers/${beer.id}`} key={beer.id} className="card-list__link">
                    <Card key={beer.id} beer={beer} />
                </Link>
            </div>
            )
            }
        </div>
        
    )
}

export default CardList