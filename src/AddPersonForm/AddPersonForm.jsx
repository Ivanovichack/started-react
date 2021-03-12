import React, { useState } from 'react';
import './App.css';

function AddPersonForm(props){
    const [person, setPerson] = useState('');

    function handleSubmit(e){
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    function handleChange(e){
        setPerson(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={person} placeholder="Ingrese nombre"/>
            <input className="btn btn-success btn-sm per" type="submit" value="Add Persona"/>
        </form>
    );
}

export default AddPersonForm;