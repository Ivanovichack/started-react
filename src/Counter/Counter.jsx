import React, { useState, useEffect } from 'react';
import './App.css'

function Counter(){
    
    const [contador, setContador] = useState(0);
    const [con, setCon] = useState(9);
    function incrementar(){
        setContador(contador + 1);
    }

    function change(){
        setCon(4);
    }

    useEffect(() => {
        alert("Total cliks " + con);
    },[con]);

    return(
        <div>
            <p>{con}</p>
            <input class="buss" type="button" value="Sumar" onClick={incrementar}/> 
            <input class="buss" type="button" value="Reset" onClick={change}/>
        </div>
    );
}

export default Counter;