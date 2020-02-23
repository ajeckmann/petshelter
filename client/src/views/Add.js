import React, {useState} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';
import PetForm from '../components/PetForm';


const Add = (props)=>{
    const [newPet, setNewPet]= useState({
        name:"",
        type:"",
        description:"",
        skillone:"",
        skilltwo:"",
        skillthree:""
    });

    const [errors, setErrors]=useState({
        name:"",
        type:"",
        description:""

    })

    const handleChange=(e)=>{
        e.preventDefault();
        setNewPet({
            ...newPet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', newPet)
        .then(res=>{
            setNewPet({
                name:"",
                type:"",
                description:"",
                skillone:"",
                skilltwo:"",
                skillthree:""

            })
        })
        .then(res=>navigate("/pets"))
        .catch(err=>{
            setErrors(err.response.data);
        })
    }


    return(
        <div>
            <h2> You Can Add a Pet Here!</h2><br/>
            <PetForm
            buttontext= "Add Pet"
            form = {newPet}
            handleChange = {handleChange}
            handleSubmit = {handleSubmit}
            errors = {errors!= null? errors:""} 
            />
            <button className="btn btn-danger" onClick={(e)=>navigate('/pets')}>Cancel</button>
        </div>
    )
}

export default Add;

