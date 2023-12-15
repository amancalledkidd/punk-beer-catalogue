import './FilterItem.scss'
import { ChangeEventHandler } from 'react'

type FilterItemProps = {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string;
}

const FilterItem = ({ onChange, value, label }: FilterItemProps) => {
    return (
        <>
            <label>{label}</label>
            <input type='checkbox' value={value} onChange={onChange}></input>
        </>
    )
}

export default FilterItem