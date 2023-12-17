import { useState, useEffect } from "react"
import SideNavbar from "../SideNavbar/SideNavbar"
import Main from "../Main/Main"
import { Beer } from "../../types/types"
import './Home.scss'


type HomeProps = {
    beers: Beer[]
    setPunkBeers: (punkBeers: Beer[]) => void;
}

const Home = ({ beers, setPunkBeers }: HomeProps) => {
    const [searchBeer, setSearchBeer] = useState<string>("")
    const [filters, setFilters] = useState<string[]>([])


    useEffect(() => {
        getBeers(filters)
      }, [filters])
    
      const getBeers = async (filters: string[]) => {
        let url: string = 'https://api.punkapi.com/v2/beers?per_page=80'
        const params: string[] = []
    
        if (filters.includes('High Alcohol')) {
            params.push('abv_gt=6');
            console.log('Test')
        }
        if (filters.includes('Classic Range')) {
            params.push('brewed_before=01-2010')
        }
        if (filters.includes('High Acidity')) {
            params.push('ph_lt=4')
        }
        
        if (params.length > 0) {
            url += `&${params.join('&')}`
        }

        const response = await fetch(url)
        const data: Beer[] = await response.json();
        setPunkBeers(data)
        console.log(data)
      }

    return (
    <div className="home">
        <section className="home__side-navbar">
            <SideNavbar 
                searchBeer={searchBeer} 
                setSearchBeer={setSearchBeer} 
                filters={filters}
                setFilters={setFilters}
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
