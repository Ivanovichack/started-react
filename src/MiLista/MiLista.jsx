import React from 'react';

function MiLista(props){
    const arr= props.data;
    const listaDato = arr.map((val,index) =>
        <li key={index}>{val}</li>
    );
    return(
        <div>
            <ul>{listaDato}</ul>
        </div>
    );
}

export default MiLista;