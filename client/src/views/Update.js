import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';



const Update = ({id})=>{

    const [petToedit, setPetToEdit] = useState({});
    const [errors, setErrors] = useState({
        name:"",
        type:"",
        description:""

    })

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>setPetToEdit(res.data))
        .catch(err=>navigate('/pets'))

    }, [])

    const handleLike= (e)=>{
        e.preventDefault();
        Axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>setPetToEdit(res.data))
        setPetToEdit({
            ...petToedit,
            [e.target.likes]: e.target.likes+1})
           
        .then(Axios.put(`http://localhost:8000/api/pets/${id}`, petToedit))
            
    }


        
    
    const handleChange = (e)=>{
        e.preventDefault();
        setPetToEdit({
            ...petToedit,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/pets/${id}`, petToedit)
        .then(res=>navigate(`/pets/${id}`))
        .catch(err=>{
            setErrors(err.response.data)});
    }


    return(

        <div>
            <h1>You Want to Update {petToedit.name}'s information?</h1>
            <h2>Sure, go right ahead</h2>
            <PetForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            form={petToedit}
            buttontext="Update Pet Info"
            errors= {errors}
            
            />
            <button className="btn btn-danger" onClick={(e)=>navigate('/pets')}>Cancel</button>
        </div>
    )



}

export default Update;