import React, { Component } from 'react';
import './PanicBouton.css';

class PanicBouton extends React.Component {
    getComponent = () =>{
        console.log(this.props);
    }

    render() {
        return(
            <div className="PanicBouton">
                <div className="border_button">
                    <button onClick = {this.getComponent}>PANIC!</button>
                </div>
            </div>
        )
    }
}

export default PanicBouton;



