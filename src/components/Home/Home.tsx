import { useState, useEffect } from "react"
import SideNavbar from "../SideNavbar/SideNavbar"
import Main from "../Main/Main"
import { Beer } from "../../types/types"
import './Home.scss'


type HomeProps = {
    beers: Beer[]
    setPunkBeers: (punkBeers: Beer[]) => void;
}
// Home is the homepage for the site, this is where app will direct the user at first
// It stores the Side Navbar and Main components and calls the API for the beer data
const Home = ({ beers, setPunkBeers }: HomeProps) => {
    
    // This level stores the filterItems and search state, so it can be passed into the api call and/or main
    const [searchBeer, setSearchBeer] = useState<string>("")
    const [filters, setFilters] = useState<string[]>([])
    const [pageNum, setPageNum] = useState<number>(1)

    // useEffect calls the API to get the beers, using the filters and page num.
    // filters and page num are in the dependency array, so useEffect will call getBeers any time they change
    useEffect(() => {
        getBeers(filters, pageNum)
    },[filters, pageNum])
    

    // getBeers sends a GET request to the API, using query params.
    // filters: is an array of strings from the checkbox FilterItems.
    // page: is a number from the range FilterItems
    const getBeers = async (filters: string[], page: number) => {
        // url is includes per page parameter at 80, to get the most beers back possible
        // Then include the page parameter, so the user can access all beers
        let url: string = `https://api.punkapi.com/v2/beers?per_page=80&page=${page}`

        // Empty string array to store query params
        const params: string[] = []
        
        // checks filter array for filter, if filter is there. query param is added to array
        if (filters.includes('High Alcohol')) {
            params.push('abv_gt=6');

        }
        if (filters.includes('Classic Range')) {
            params.push('brewed_before=01-2010')
        }
        // if params array is more than 0, the params are added to url, using & to join them so the req is correct
        if (params.length > 0) {
            url += `&${params.join('&')}`
        }
        // get data back then store in state for later use
        const response = await fetch(url)
        const data: Beer[] = await response.json();
        setPunkBeers(data)
    }

    return (
    <div className="home">
        <section className="home__side-navbar">
            <SideNavbar 
                searchBeer={searchBeer} 
                setSearchBeer={setSearchBeer} 
                filters={filters}
                setFilters={setFilters}
                pageNum={pageNum}
                setPageNum={setPageNum}
                />
        </section>
        <section className="home__main">
            <Main 
                beers={beers} 
                searchBeer={searchBeer} 
                filters={filters}
            />
        </section>
        
        
    </div>
    )
}

export default Home
