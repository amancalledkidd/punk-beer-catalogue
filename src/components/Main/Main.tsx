import { Beer } from "../../types/types"
import CardList from "../CardList/CardList"

type MainProps = {
    beers: Beer[]
    searchBeer: string;
}

const Main = ({ beers, searchBeer }: MainProps) => {

    const searchBeerResult = beers.filter(beer => beer.name.toLowerCase().includes(searchBeer.toLowerCase()))


    return (
        <div className="main-section">
            {searchBeer === "" && <CardList beers={beers} />}
            <CardList beers={searchBeerResult} />
        </div>
    )
}

export default Main