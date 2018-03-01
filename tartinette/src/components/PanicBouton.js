import React, { Component } from 'react';

class PanicBouton extends React.Component {
    getComponent = () =>{
        console.log(this.props);
    }

    render() {
        return(
            <div className="PanicBouton">
                <button onClick = {this.getComponent}>PANIC!</button>
            </div>
        )
    }
}

export default PanicBouton;



