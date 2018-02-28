import React, { Component } from 'react';
import CommandeBouton from '../components/CommandeBouton';

class Accueil extends React.Component {
    render() {
        return(
            <div className="accueil">
                <h1>Accueil</h1>
                <CommandeBouton/>
            </div>
        )
    }
}

export default Accueil;



