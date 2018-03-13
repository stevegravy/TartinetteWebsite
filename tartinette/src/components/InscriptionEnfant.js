import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
//Component
import Header from "./Header";
import Footer from "./Footer";
import PaiementPaypal from "../layout/PaiementPaypal";
import PaiementStripe from "../layout/PaiementStripe";
//CSS
import "./InscriptionEnfants.css";

class InscriptionEnfant extends React.Component {
    render() {
        return(
            <div className="header">
                <Header/>
                <div className="mainContent">
                    <h4 className="nomEnfant">"Nom de la tribu"</h4>
                    <Row>
                        <Input s={6} label="Prénom de l'enfant" required/>
                        <Input s={6} label="Nom de l'enfant" required/>
                        <Input s={6} type='select'label="Ecole de l'enfant" required>
                            <option value='saintCharles'>Institut Saint-Charles - Molenbeek</option>
                            <option value='saintDenis'>Saint-Denis - Woluwe-St-Lambert</option>
                            <option value='sergeCreuz'>Collège Serge Creuz</option>
                        </Input>
                        <Input s={6} label="Classe" required/>
                    </Row>
                    <p className="form">Goût de mon enfant (plusieurs choix possibles) :</p>
                    <Row className="pain" required>
                        <Input name='goutClassique' type='checkbox' value='goutClassique' label='Le Classique : Jambon cuit - Beurre - Salade' className='gout' />
                        <Input name='goutDago' type='checkbox' value='goutDago' label='Le Dago : Jambon cuit - fromage - Légumaise - Salade' className='gout' />
                        <Input name='goutFromage' type='checkbox' value='goutFromage' label='Le Fromage : Fromage de vache - Beurre - Salade' className='gout' />
                        <Input name='goutAutreFromage' type='checkbox' value='goutAutreFromage' label='L Autre Fromage : Fromage de chèvre - Légumaise - Salade' className='gout' />
                        <Input name='goutItalien' type='checkbox' value='goutItalien' label='L Italien : Jambon cru Italien - Pesto - Légumes grillés' className='gout' />
                        <Input name='goutHalal' type='checkbox' value='goutHalal' label='Le Halal : Saucisson de dinde - Salade' className='filled-in' />
                        <Input name='goutAventurier' type='checkbox' value='goutAventurier' label='L Aventurier: Découverte - Surprise chaque jour' className='gout' />
                    </Row>
                    <Row className="taille" required>
                        <p className="form">Appétit de mon enfant</p>
                        <Input s={6} type='select' required>
                            <option value='Benjamin'>La Benjamine/Le Benjamin : 2 tranches Blanc ou 5 Céréales ou 1/4 Baguette</option>
                            <option value='Cadet'>La Cadette/Le Cadet : 4 tranches Blanc ou 5 Céréales ou 1/3 Baguette</option>
                            <option value='Ainé'>L'Ainée/L'Ainé : 6 tranches Blanc ou 5 Céréales ou 1/2 Baguette</option>
                        </Input>
                    </Row>
                    <p className="commande">Ses pains préférés sont (plusieurs choix possibles) :</p>
                    <Row required>
                        <Input name='painBlanc' type='checkbox' value='painBlanc' label='Tartines Pain Blanc' className='choixDuPain' />
                        <Input name='painCereales' type='checkbox' value='painCereales' label='Tartines Pain 5 Céréales' className='choixDuPain' />
                        <Input name='Baguette' type='checkbox' value='Baguette' label='Baguette' className='choixDuPain' />
                    </Row>
                    <h5 className="commande">Abonnemant de 1 à 5 jours par semaine. Si vous choisissez 5 jours, vous payez 4 jours et le cinquième est gratuit!</h5>
                    <p className="commande">Jours de la semaine :</p>
                    <Row className="pain" required label="Jours de la semaine :">
                        <Input name='Lundi' type='checkbox' value='Lundi' label='Lundi' className='jourSemaine' />
                        <Input name='Mardi' type='checkbox' value='Mardi' label='Mardi' className='jourSemaine' />
                        <Input name='Mercredi' type='checkbox' value='Mercredi' label='Mercredi' className='jourSemaine' />
                        <Input name='Jeudi' type='checkbox' value='Jeudi' label='Jeudi' className='jourSemaine' />
                        <Input name='Vendredi' type='checkbox' value='Vendredi' label='Vendredi' className='jourSemaine' />
                    </Row>
                    <p className="form">Mon enfant n'est pas trop fan :</p>
                    <Row>
                        <Input name='retirerLegumaise' type='checkbox' value='retirerLegumaise' label='de la légumaise' className='retirerCondiment' />
                        <Input name='retirerPesto' type='checkbox' value='retirerPesto' label='du pesto' className='retirerCondiment' />
                        <Input name='retirerBeurre' type='checkbox' value='retirerBeurre' label='du beurre' className='retirerCondiment' />
                        <Input name='retirerSalade' type='checkbox' value='retirerSalade' label='de la salade' className='retirerCondiment' />
                        <Input name='retirerLegumes' type='checkbox' value='retirerLegumes' label='des légumes grillés' className='retirerCondiment' />
                        <p>Cochez ce que vous ne voulez pas comme accompagnement dans les tartines de votre enfant.</p>
                        <Input s={6} label="Détails" Placeholder="Allergies, intolérences, spécificités,..."/>
                    </Row>
                    <p className="form">Ajouter un fruit ?</p>
                    <Row required>
                        <Input name='fruit' type='radio' value='fruitOui' label='Oui' />
                        <Input name='fruit' type='radio' value='fruitNon' label='Non' />
                    </Row>
                </div>
                <PaiementPaypal/>
                <PaiementStripe/>
                <Footer/>
            </div>

        )
    }
}


export default InscriptionEnfant