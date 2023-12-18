import { Beer } from "../../types/types"
import CardList from "../CardList/CardList"

type MainProps = {
    beers: Beer[];
    searchBeer: string;
    filters: string[];
}

// Main stores the Cardlist, and passes down data to it.
// Also takes filters and search info and uses logic to decide what the user sees base on the sidenavbar input
const Main = ({ beers, searchBeer, filters }: MainProps) => {

    // This function filters beers by first checking the search results, if they dont match, the beers is filtered out
    // This same way of filtering is done for each filter in the filters array.
    // Whatever passes all checks is then returned in a Beer array
    const filterAndSearchBeers = (): Beer[] => {
        return beers.filter(beer => {
            if (searchBeer && !beer.name.toLowerCase().includes(searchBeer.toLowerCase())) {
                return false;
            }
            // These filters were used before adding the API call. This Api call means the are not currently needed
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