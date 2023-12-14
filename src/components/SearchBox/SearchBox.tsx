import { FormEventHandler } from 'react'
import './SearchBox.scss'

type SearchBoxProps = {
    value: string
    handleSearchInput: FormEventHandler<HTMLInputElement>
    label: string;
}

const SearchBox = ({label, value, handleSearchInput}: SearchBoxProps) => {

    return (
        <div className='search-box'>
            <label className='search-box__title'>
                {label} Search: 
            </label>
            
            <input 
                className='search-box__input'
                type="text"
                value={value}
                onInput={handleSearchInput}
            />
        </div>
    )
}

export default SearchBox