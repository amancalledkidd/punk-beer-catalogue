import { Beer } from "../../types/types"
import Card from "../Card/Card"

type CardListProp = {
    beers: Beer[];
}

const CardList = ({ beers }: CardListProp) => {
    return (
        <Card beer={beers[0]} />
    )
}

export default CardList