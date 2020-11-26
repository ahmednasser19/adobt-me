import React , {useState}from "react";

const useDropdown = (label , defaultstate , option) => { 
    const [state , setState] = useState(defaultState) ; 
    const id = `use-dropdown-${label.replace(" " ,"").toLowerCase()}`
        const Dropdown = () => (
    <label htmlFor={id}>
        {labed}
            <select id = {id} 
            value ={state}
            onchange={e => setState(e.target.value)}
            onBlur={e=> setState(e.target.value)}
            disabled={option.length ===0 }

            >
                <option>All</option>
                {option.map(item => (<option key = {item } value={item} >{item}</option>
                ))}
            </select>
        </label>
    );
    return [state, Dropdown , setState];
};

export default useDropdown;