import { ChangeEventHandler } from 'react'

// Filter item is passed a label, a onChange function and a value
type FilterItemProps = {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string;
}

// Filter item is a checkbox which allows the user to toggle a value, this is stored in state for later use
const FilterItem = ({ onChange, value, label }: FilterItemProps) => {
    return (
        <>
            <label>{label}
                <input type='checkbox' value={value} onChange={onChange}></input>
            </label>
        </>
    )
}

export default FilterItem