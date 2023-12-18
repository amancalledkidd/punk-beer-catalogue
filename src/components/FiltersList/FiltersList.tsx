import './FiltersList.scss'
import FilterItem from '../FilterItem/FilterItem'
import { ChangeEvent } from 'react'
import FilterRangeItem from '../FilterRangeItem/FilterRangeItem';

type FiltersListProps = {
    filters: string[];
    setFilters: (filters: string[]) => void;
    pageNum: number;
    setPageNum: (pageNum: number) => void;
}

// Filter list will display all the filter items and include any logic for the items
const FiltersList = ({ filters, setFilters, pageNum, setPageNum }: FiltersListProps) => {
    
    // Filter Change is to be used with Filter items with checkboxes.
    // The filters from FilterItems are stored in a state Array at the Home Level.
    // This when the checkbox is checked, this function loops through the array
    // If the filter is in the array the function removes it else it adds the filter to the array.
    const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value
        let updatedFilters;
        if (filters.includes(input)) {
            updatedFilters = filters.filter(filter => filter !== input)
        } else {
            updatedFilters = [...filters, input]
        }
        setFilters(updatedFilters)
    }

    // Page Change, is used with the Range input and adjusts the pageNum state, used to change the API page results
    const pageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = Number(event.currentTarget.value)
        setPageNum(input)
    }


    return (
        <div className='filter-list'> 
            <FilterRangeItem value={pageNum} onChange={pageChange} min={1} max={5} /> 
            <FilterItem label="High ABV (>6.0%)" value={"High Alcohol"} onChange={filterChange} />
            <FilterItem label="Classic Range" value={"Classic Range"} onChange={filterChange} />
            <FilterItem label="High Acidity (<4.0%)" value={"High Acidity"} onChange={filterChange} />
        </div>
    )
}

export default FiltersList