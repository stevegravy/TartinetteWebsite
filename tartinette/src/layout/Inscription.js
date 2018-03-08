import React, { Component } from 'react';
import {Button, Modal, Row, Input, Collapsible, CollapsibleItem} from 'react-materialize';
//CSS
import './Inscription.css';

class Inscription extends React.Component {

    render() {
        return(
            <div className="Inscription">
                <Modal
                    className = "inscription_modal"
                    header='Inscrivez-vous'
                    trigger={<Button waves='light'>Inscription</Button>}>
                    <Row>
                        <h3 className="bleu">Vous</h3>
                        <Input s={12} label="Votre nom" />
                        <Input s={12} label="Votre prénom" />
                        <h3 className="bleu">Votre tribu</h3>
                        <Input s={12} label="Enfant 1" Placeholder="Nom et prénom de l'enfant" />
                        <Collapsible>
                            <CollapsibleItem header= "Ecole de l'enfant" s={12} >
                                <Row>
                                    <Input className='with-gap' name='group1' type='radio' value='Saint-Charles' label='Institut Saint-Charles - Molenbeek' />
                                    <Input className='with-gap' name='group1' type='radio' value='Saint-Denis' label='Saint-Denis - Woluwe-St-Lambert' />
                                    <Input className='with-gap' name='group1' type='radio' value='Serge Creuz' label='Collège Serge Creuz' />
                                </Row>
                            </CollapsibleItem>
                        </Collapsible>
                        <Input s={12} label="Détails" Placeholder="Allergies, intolérences, spécificités,..."/>
                        <p className="boutonAjoutEnfant">ajouter un enfant</p>
                        <Button floating large className='red' waves='light' icon='add' />
                        <h3 className="bleu">Votre compte</h3>
                        <Input type="email" label="Email" s={12} />
                        <Input type="password" label="Mot de passe" s={12} />
                        <Input type="password" label="Confirmation mot de passe" s={12} />
                        <div className="envoi">
                            <Button waves='light'>Je m'inscris</Button>
                        </div>
                    </Row>
                </Modal>
            </div>
        )
    }
}

export default Inscription;



