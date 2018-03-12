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
                    <p className="boutonAjoutEnfant">ajouter un enfant</p>
                    <Button floating large className='green' waves='light' icon='add' />
                    <p className="form">Prix hebdomadaire :</p>
                    <Input s={6} formmethod="get" />
                    <p className="form">Méthode de paiement</p>
                    <Row>
                        <Input name='paiement' type='radio' value='stripe' label='Stripe' />
                        <Input name='paiement' type='radio' value='paypal' label='Paypall' />
                    </Row>
                    <div className="confirmationBouton">
                        <Button waves='light'>Confirmer mon abonnement</Button>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Commande


