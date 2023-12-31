import { ChangeEventHandler } from 'react';
import './FilterRangeItem.scss'


type FilterRangeItemProps = {
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>
    min: number;
    max: number;

}

// Filter Range Item is a range input intended to be used as a filter on FilterList
const FilterRangeItem = ({ value, onChange, min, max}: FilterRangeItemProps) => {
    return (
        <div className='range-input'>
            <label className='range-input__label'>Page: {value}
                <input 
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    className='range-input__input'
                />
            </label>
        </div>
    )
}

export default FilterRangeItem