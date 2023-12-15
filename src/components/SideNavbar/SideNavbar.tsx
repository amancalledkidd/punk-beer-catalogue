import { FormEvent } from "react"
import SearchBox from "../SearchBox/SearchBox"

type SideNavbarProps = {
    searchBeer: string;
    setSearchBeer: (searchBeer: string) => void;
}

const SideNavbar = ({ searchBeer, setSearchBeer }: SideNavbarProps) => {
    

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const searchTerm = event.currentTarget.value
        setSearchBeer(searchTerm)
    }


    return (
        <div className="side-navbar">
            <SearchBox label="Beer" value={searchBeer} handleSearchInput={handleSearchInput}/>
        </div>
    )
}

export default SideNavbar