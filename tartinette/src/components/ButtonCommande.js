import React from 'react';
import {Button, Input, Row} from "react-materialize";

export default class ButtonCommande extends React.Component {
    render() {
        return (
            <div>
                <p className="boutonAjoutEnfant">ajouter un enfant</p>
                <Button floating large className='green' waves='light' icon='add'/>
                <p className="form">Prix hebdomadaire :</p>
                <Input s={6} formmethod="get"/>
                <p className="form">Méthode de paiement</p>
                <Row>
                    <Input name='paiement' type='radio' value='stripe' label='Stripe'/>
                    <Input name='paiement' type='radio' value='paypal' label='Paypall'/>
                </Row>

            </div>
        )
    }
}