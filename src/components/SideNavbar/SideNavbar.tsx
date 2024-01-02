import { FormEvent } from "react"
import SearchBox from "../SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"
import './SideNavbar.scss'

type SideNavbarProps = {
    searchBeer: string;
    setSearchBeer: (searchBeer: string) => void;
    filters: string[];
    setFilters: (filters: string[]) => void;
    pageNum: number;
    setPageNum: (pageNum: number) => void;
}

// SideNavbar is essentially a container and is used to join all the filter and search options used on the beers.
const SideNavbar = ({ 
        searchBeer, 
        setSearchBeer, 
        filters, 
        setFilters, 
        pageNum, 
        setPageNum 
    }: SideNavbarProps) => {
    
    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const searchTerm = event.currentTarget.value
        setSearchBeer(searchTerm)
    }


    return (
        <div className="side-navbar">
            <div className="side-navbar__search">
                <SearchBox label="Beer" value={searchBeer} handleSearchInput={handleSearchInput}/>
            </div>
            <div className="side-navbar__filters">
                <FiltersList 
                    filters={filters} 
                    setFilters={setFilters} 
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                />
            </div>
        </div>
    )
}

export default SideNavbar