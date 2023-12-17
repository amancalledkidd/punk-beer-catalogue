import { Beer } from "../../types/types"
import CardList from "../CardList/CardList"

type MainProps = {
    beers: Beer[];
    searchBeer: string;
    filters: string[];
}

const Main = ({ beers, searchBeer, filters }: MainProps) => {

    const filterAndSearchBeers = (): Beer[] => {
        return beers.filter(beer => {
            if (searchBeer && !beer.name.toLowerCase().includes(searchBeer.toLowerCase())) {
                return false;
            }

            // if (filters.includes('High Alcohol') && beer.abv <= 6) {
            //     return false;
            // }
            // if (filters.includes('Classic Range') && Number(beer.first_brewed.slice(3)) >= 2010) {
            //     return false;
            // }
            if (filters.includes('High Acidity') && beer.ph >= 4) {
                return false;
            }

            return true;
        })
    }

    return (
        <div className="main-section">
            <CardList beers={filterAndSearchBeers()} />
        </div>
    )
}

export default Main