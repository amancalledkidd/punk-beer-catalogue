import { useState } from "react"
import SideNavbar from "../SideNavbar/SideNavbar"
import Main from "../Main/Main"
import { Beer } from "../../types/types"
import './Home.scss'


type HomeProps = {
    beers: Beer[]
}

const Home = ({ beers }: HomeProps) => {
    const [searchBeer, setSearchBeer] = useState<string>("")
    const [filters, setFilters] = useState<string[]>([])

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
