import { ChangeEventHandler } from 'react';
import './FilterRangeItem.scss'

type FilterRangeItemProps = {
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>

}

const FilterRangeItem = ({ value, onChange}: FilterRangeItemProps) => {
    return (
        <div className='range-input'>
            <label>Page: {value}</label>
            <input 
                type="range"
                min={1}
                max={5}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FilterRangeItem