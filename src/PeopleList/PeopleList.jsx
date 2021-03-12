import React from 'react';
import './style.css';

function PeopleList(props){
    const arreglo = props.data;
    const lista = arreglo.map((val, index) =>
        <li key={index}>{val}</li>
    );
    return(
        <ul>
            {lista}
        </ul>
    );
}

export default PeopleList;