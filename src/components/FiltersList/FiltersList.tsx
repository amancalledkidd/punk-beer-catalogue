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

const FiltersList = ({ filters, setFilters, pageNum, setPageNum }: FiltersListProps) => {
    

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

    const pageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = Number(event.currentTarget.value)
        setPageNum(input)
    }


    return (
        <div className='filter-list'> 
            <FilterItem label="High ABV (>6.0%)" value={"High Alcohol"} onChange={filterChange} />
            <FilterItem label="Classic Range" value={"Classic Range"} onChange={filterChange} />
            <FilterItem label="High Acidity (<4.0%)" value={"High Acidity"} onChange={filterChange} />
            <FilterRangeItem value={pageNum} onChange={pageChange} min={1} max={5} /> 
        </div>
    )
}

export default FiltersList