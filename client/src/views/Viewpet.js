import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Viewpet = ({id})=>{

const [pettoview, setPetToView]= useState({});


const removePet =(id)=>{
    axios.delete(`http://localhost:8000/api/pets/${id}`)
    .then(res=>{
        navigate('/pets');
        // setIsRemoved(true);
    })
}

const style= {
    width: "200px",
    marginLeft: "45%"
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${id}`)
    .then(res=>{
        setPetToView(res.data)
        
    })
    .catch(err=>navigate('/pets'));
}, []);

const handleLike = (e)=>{
    setPetToView({
        ...pettoview,
        [pettoview.likes]: (pettoview.likes)+1})
    axios.put(`http://localhost:8000/api/pets/${id}`,pettoview)
    .then(res=> axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => setPetToView(res.data))
    )
       

        
}


const skillthree= pettoview.skillthree
return(
    <div>
        
        <button className="btn btn-dark" onClick={() => navigate("/pets")}>Home</button>
        <h1>Pet Information for:  {pettoview.name}</h1>
        <h3>Pet Name: {pettoview.name}</h3>
        <h3>Pet Type: {pettoview.type}</h3>
        <h2>Pet Likes: {pettoview.likes}</h2>
        <h3>What kinds of things can this Pet do??</h3>
        <ul>
            <li style={style}>{pettoview.skillone}</li>
            <li style={style}>{pettoview.skilltwo}</li>
            
            <li style={style}>{pettoview.skillthree}</li>
            
           
        </ul>

        <button className="btn btn-success" onClick={() => removePet(id)}>Adopt this Pet</button>
        <button className="btn btn-success" onClick={(e) => handleLike()}>Like this Pet</button>


    </div>


);





}
export default Viewpet;