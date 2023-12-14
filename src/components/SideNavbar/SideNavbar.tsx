import { useState, FormEvent, FormEventHandler } from "react"
import SearchBox from "../SearchBox/SearchBox"
import { Beer } from "../../types/types"

type SideNavbarProps = {
    beer: Beer[]
}

const SideNavbar = ({ beer }: SideNavbarProps) => {
    const [searchBeer, setSearchBeer] = useState<string>("")


    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const searchTerm = event.currentTarget.value
        setSearchBeer(searchTerm)
    }



    return (
        <div className="side-navbar">
            <SearchBox label="beer" value={searchBeer} handleSearchInput={handleSearchInput}/>
        </div>
    )
}

export default SideNavbar