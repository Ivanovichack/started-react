import React from 'react';
import createClass from 'create-react-class';

var Another = createClass({
    render: function(){
        return (
            <div>
                <p>Fui creado con createClass</p>
                <h2>
                    {this.props.name}
                </h2>
            </div>
        )
    }
})

export default Another;