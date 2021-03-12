import React,{ useState } from 'react';

function Formulario(){
    const[numa, setA] = useState(0);
    const[numb, setB] = useState(0);

    function change(e){
        setB(e.target.value);
    }

    function submit(e){
        setA(numa + Number(numb));
        e.preventDefault();
    }

    return(
        <form onSubmit={submit}>
            <input class="form-control" type="number" onChange={change} value={numb}/>
            <input class="btn btn-danger" type="submit" value="Add"/>
            <p>Suma es {numa}</p>
        </form>
    );
}

export default Formulario;