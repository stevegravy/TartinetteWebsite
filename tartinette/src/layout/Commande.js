import React, { Component } from 'react';
import {Row, Input, Button} from 'react-materialize';

//CSS
import "./Commande.css";
class Commande extends React.Component {
    render() {
        return(
            <div className="commande">
                <h4 className="jourSemaine">Lundi</h4>
                <Row className="sandwich">
                    <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                        <option value='1'>LE CLASSIQUE : Jambon cuit - Beurre - Salade</option>
                        <option value='2'>LE DAGO : Jambon cuit - fromage - Légumaise - Salade
                        <option value='3'>LE FROMAGE : Fromage de vache - Beurre - Salade</option>
                        <option value='4'>L'AUTRE FROMAGE : Fromage de chèvre - Légumaise - Salade</option>
                        <option value='5'>L'ITALIEN : Jambon cru Italien - Pesto - Légumes grillés</option>
                        <option value='6'>LE HALAL : Saucisson de dinde - Salade</option>
                        <option value='7'>L'AVENTURIER : Découverte - Surprise chaque jour</option>
                    </Input>
                </Row>
                <h4 className="abonnement">Abonnemant de 1 à 5 jours par semaine. Si vous choisissez 5 jours, vous payez 4 jours et le cinquième est gratuit!</h4>
                <Row className="taille">
                    <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                        <option value='1'>La Benjamine/Le Benjamin</option>
                        <option value='2'>La Cadette/Le Cadet</option>
                        <option value='3'>L'Ainée/L'Ainé</option>
                    </Input>
                </Row>
                <Row className="pain">
                    <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </Input>
                </Row>
                <Row>
                    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked' />
                    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked' />
                    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked' />
                </Row>
                <Row>
                    <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked' />
                </Row>
            </div>
        )
    }
}

export default Commande


