import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';
//component
import Header from '../components/Header';
import Footer from '../components/Footer';
import InscriptionEnfant from "../components/InscriptionEnfant";
//CSS
import "./Commande.css";

class Commande extends React.Component {
    render() {
        return(
            <div className="commande">
                <div className="mainContent">
                    <Header/>
                    <InscriptionEnfant/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Commande


