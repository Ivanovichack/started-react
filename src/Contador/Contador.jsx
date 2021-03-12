import React from 'react';

export default class Contador extends React.Component {
    state = {
        contador: 0
    }
    
    incrementar = () => {
        this.setState ({
            contador: this.state.contador+1
        });
    }

    render() {
        return(
            <div>
                {this.state.contador}
                <input onClick={this.incrementar} type="button" value="Incrementar" />
            </div>
        )   
    }   
}