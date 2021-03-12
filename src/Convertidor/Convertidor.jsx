import React, { useState } from 'react'

function Convertidor() {
    const[min, conSeg] = useState(0);

    function change(e){
        conSeg(e.target.value);
    }

    function reaccionar() {
        return (min/3600).toFixed(2)
    }

    return(
        <div>
            <input value={min} onChange={change} type="text" placeholder="Ingrese minutos"/>
            <p>Minutos {min} a segundos ({reaccionar(min)})</p>
        </div>
    );
}

export default Convertidor;