import { Beer } from "../../types/types"
import { Link } from "react-router-dom";
import Card from "../Card/Card"

type CardListProp = {
    beers: Beer[];
}

const CardList = ({ beers }: CardListProp) => {
    return (
        <div className="card-list">
            {beers.map(beer => 
            <Link  to={`beers/${beer.id}`} key={beer.id} className="card-list__link">
                <Card key={beer.id} beer={beer} />
            </Link>)
            }
        </div>
        
    )
}

export default CardList