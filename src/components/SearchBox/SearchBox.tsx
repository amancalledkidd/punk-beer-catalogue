import { FormEventHandler } from 'react'
import './SearchBox.scss'

type SearchBoxProps = {
    searchedName: string
    handleSearchInput: FormEventHandler<HTMLInputElement>
    label: string;
}

const SearchBox = ({label, searchedName, handleSearchInput}: SearchBoxProps) => {

    return (
        <div className='search-box'>
            <label className='search-box__title'>
                {label} Search: 
            </label>
            
            <input 
                className='search-box__input'
                type="text"
                value={searchedName}
                onInput={handleSearchInput}
            />
        </div>
    )
}

export default SearchBox