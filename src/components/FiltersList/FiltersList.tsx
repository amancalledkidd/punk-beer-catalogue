import './FiltersList.scss'
import FilterItem from '../FilterItem/FilterItem'
import { ChangeEvent } from 'react'

type FiltersListProps = {
    filters: string[];
    setFilters: (filters: string[]) => void;
}

const FiltersList = ({ filters, setFilters }: FiltersListProps) => {

    const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value
        let updatedFilters;
        if (filters.includes(input)) {
            updatedFilters = filters.filter(filter => filter !== input)
        } else {
            updatedFilters = [...filters, input]
        }
        setFilters(updatedFilters)
        console.log(updatedFilters)
    }


    return (
        <>
            <FilterItem label="High ABV (>6.0%)" value={"High Alcohol"} onChange={filterChange} />
            <FilterItem label="Classic Range" value={"Classic Range"} onChange={filterChange} />
            <FilterItem label="High Acidity (>6.0%)" value={"High Acidity"} onChange={filterChange} />
        </>
    )
}

export default FiltersList