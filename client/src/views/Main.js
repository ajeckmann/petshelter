import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Main =(props) =>{

    const [pets, setPets]= useState([]);
   

    //make api call to retrieve all pets
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
        .then(res=>{
            setPets(res.data);

        })
    }, []);

    


    return(
        <div>
            <h1>Welcome to Ari's Pet Shelter</h1>
            <h2><Link to="/pets/new">Add Pet to Shelter</Link></h2>
            <h4>Give the following pets a home!</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pets.map((p, idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{p.name}</td>
                                    <td>{p.type}</td>
                                    <td><button onClick={() => navigate(`/pets/${p._id}`)}>Details</button>|<button onClick={() => navigate(`/edit/${p._id}`)}>Edit</button></td>

                                </tr>
                                )
                            }
                        )
                    }

                </tbody>

            </table>





        </div>

    );
}

export default Main;