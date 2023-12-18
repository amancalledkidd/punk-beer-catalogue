import { FormEvent } from "react"
import SearchBox from "../SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"

type SideNavbarProps = {
    searchBeer: string;
    setSearchBeer: (searchBeer: string) => void;
    filters: string[];
    setFilters: (filters: string[]) => void;
    pageNum: number;
    setPageNum: (pageNum: number) => void;
}

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
            <SearchBox label="Beer" value={searchBeer} handleSearchInput={handleSearchInput}/>
            <FiltersList 
                filters={filters} 
                setFilters={setFilters} 
                pageNum={pageNum}
                setPageNum={setPageNum}
            />
        </div>
    )
}

export default SideNavbar