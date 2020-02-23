import React from 'react';


const Input = ({type, name, label, value, error, handleChange})=>{
    return(
        <div>
            <span>{error}</span><br />
            <label>{label}</label><br />
            <input name={name} type= {type} value={value} label= {label} error={error} onChange = {(e)=>handleChange(e)}/>




        </div>

    )
}
export default Input;