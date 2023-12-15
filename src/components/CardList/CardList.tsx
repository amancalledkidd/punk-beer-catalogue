import { Beer } from "../../types/types"
import Card from "../Card/Card"

type CardListProp = {
    beers: Beer[];
}

const CardList = ({ beers }: CardListProp) => {
    return (
        <>
            {beers.map(beer => <Card beer={beer} />)}
        </>
        
    )
}

export default CardList