import React from 'react';
import Input from './Input';



const PetForm = ({handleChange, handleSubmit, errors, form, buttontext})=>{
    return(
        <form className="form-group" onSubmit = {(e)=>handleSubmit(e)}>
            <Input
            label= "Pet Name: "
            type= "text"
            handleChange = {handleChange}
            value = {form.name}
            name="name"
            error={errors.name!=null? errors.name.message:""}
            
            
            />
            <Input
            label= "Pet Type: "
            type= "text"
            handleChange = {handleChange}
            value = {form.type}
            name="type"
            error={errors.type!=null? errors.type.message:""}
            
            
            />

            <Input
            label= "Pet Description: "
            type= "text"
            handleChange = {handleChange}
            value = {form.description}
            name="description"
            error={errors.description!=null? errors.description.message:""}
            
            
            />  

            <Input
            label= "Skill 1: "
            type= "text"
            handleChange = {handleChange}
            value = {form.skillone}
            name="skillone"
            error={errors.skillone!=null? errors.skillone.message:""}
            
            
            />  

            <Input
            label= "Skill 2: "
            type= "text"
            handleChange = {handleChange}
            value = {form.skilltwo}
            name="skilltwo"
            error={errors.skilltwo!=null? errors.skilltwo.message:""}
            
            
            />  

            <Input
            label= "Skill 3: "
            type= "text"
            handleChange = {handleChange}
            value = {form.skillthree}
            name="skillthree"
            error={errors.skillthree!=null? errors.skillthree.message:""}
            
           
            />  
             <input className= "btn btn-success" type="submit" value={buttontext}/>




        </form>


    );



}

export default PetForm;