import React, { Component } from "react";

export default class  Other extends Component {
    render() {
        return (
            <div>    
                <h2>Otro componente!</h2>
                <p>{this.props.name} or {this.props.app}</p>
            </div>
        );
    }
}
