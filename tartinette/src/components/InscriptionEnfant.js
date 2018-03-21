import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';
//Component
import Header from "./Header";
import Footer from "./Footer";
import PaiementPaypal from "../layout/PaiementPaypal";
import PaiementStripe from "../layout/PaiementStripe";
import ButtonCommande from "./ButtonCommande";
//CSS
/*
import "./InscriptionEnfants.css";
*/

const dwich = [];
const days = [];
const excep = [];

class InscriptionEnfant extends React.Component {

  /*  componentDidUpdate() {
        console.log(this.state);
    }*/

    constructor(props) {
        super(props);
        this.state = {
            prenom: "",
            nom: "",
            ecole: "",
            classe: "",
            sandwich: "",
            taille: "",
            pain: "",
            jour: "",
            exception: "",
            detail: "",
            legume: "",
            prix: 0
        }
    }

    HandleChangeSchool(e) {
        e.preventDefault();
        var data = e.target.value;
        this.setState({ecole: data});
    }

    HandleChangeSurName(e) {
        e.preventDefault();
        var data = e.target.value;
        this.setState({prenom: data});
    }

    HandleChangeName(e) {
        e.preventDefault();
        var data = e.target.value;
        this.setState({nom: data});
    }

    HandleChangeClass(e) {
        e.preventDefault();
        var data = e.target.value;
        this.setState({classe: data});
    }

    HandleChangeSize(e) {
        var data = e.target.value;
        this.setState({taille: data});
        this.setState({jour: ""});
        this.setState({checked:false});
    }

    HandleChangeBread(e) {
        var data = e.target.value;
        this.setState({pain: data})
    }

    HandleChangeSandwich(e) {
        var data = e.target.value;
        if (dwich.indexOf(data) === -1) {
            dwich.push(data)
        } else {
            dwich.splice(dwich.indexOf(data), 1);
        }
        this.setState({sandwich: dwich})
    }

    HandleChangeDays(e) {
        var data = e.target.value;
        if (days.indexOf(data) === -1) {
            days.push(data)
        } else {
            days.splice(days.indexOf(data), 1);
        }
        this.setState({jour: days});
        this.ChangePrice();
    }

    ChangePrice(){
        var nombre = this.state.jour;
        var taille = this.state.taille;
        if (taille === "Benjamin") {
            if (nombre.length === 1) {
                this.setState({prix: 3.00})
            } else if (nombre.length === 2) {
                this.setState({prix: 5.70})
            } else if (nombre.length === 3) {
                this.setState({prix: 8.10})
            } else if (nombre.length === 4) {
                this.setState({prix: 10.20})
            } else if (nombre.length === 5){
                this.setState({prix: 12.00})
            } else (
                this.setState({prix: 0})
            )
        } else if (taille === "Cadet") {
            if (nombre.length === 1) {
                this.setState({prix: 4.00})
            } else if (nombre.length === 2) {
                this.setState({prix: 7.60})
            } else if (nombre.length === 3) {
                this.setState({prix: 10.80})
            } else if (nombre.length === 4) {
                this.setState({prix: 13.60})
            } else if (nombre.length === 5){
                this.setState({prix: 16.00})
            } else (
                this.setState({prix: 0})
            )
        } else if (taille === "Ainé") {
            if (nombre.length === 1) {
                this.setState({prix: 5.00})
            } else if (nombre.length === 2) {
                this.setState({prix: 9.50})
            } else if (nombre.length === 3) {
                this.setState({prix: 13.50})
            } else if (nombre.length === 4) {
                this.setState({prix: 17.00})
            } else if (nombre.length === 5){
                this.setState({prix: 20.00})
            } else (
                this.setState({prix: 0})
            )
        }
    }

    HandleChangeException(e) {
        var data = e.target.value;
        if (excep.indexOf(data) === -1) {
            excep.push(data)
        } else {
            excep.splice(excep.indexOf(data), 1);
        }
        this.setState({jour: excep})
    }

    HandleChangeDetail(e) {
        var data = e.target.value;
        this.setState({detail: data})
    }

    HandleChangeVegetable(e) {
        var data = e.target.value;
        this.setState({legume: data})
    }


    render() {
        return (
            <div className="header">
                <div className="mainContent">
                    <h4 className="nomEnfant">"Nom de la tribu"</h4>
                    <Row>
                        <Input s={6} label="Prénom de l'enfant" required
                               onChange={this.HandleChangeSurName.bind(this)}/>
                        <Input s={6} label="Nom de l'enfant" required onChange={this.HandleChangeName.bind(this)}/>
                        <Input s={6} type='select' label="Ecole de l'enfant" required
                               onChange={this.HandleChangeSchool.bind(this)}>
                            <option defaultValue>Selectionner une école</option>
                            <option value='Saint-Charles'>Institut Saint-Charles - Molenbeek</option>
                            <option value='Saint-Denis'>Saint-Denis - Woluwe-St-Lambert</option>
                            <option value='Serge-Creuz'>Collège Serge Creuz</option>
                        </Input>
                        <Input s={6} label="Classe" required onChange={this.HandleChangeClass.bind(this)}/>
                    </Row>
                    <p className="form">Goût de mon enfant (plusieurs choix possibles) :</p>
                    <Row className="pain" required>
                        <Input name='Classique' type='checkbox' value='goutClassique'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='Le Classique : Jambon cuit - Beurre - Salade' className='gout'/>
                        <Input name='Dago' type='checkbox' value='goutDago'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='Le Dago : Jambon cuit - fromage - Légumaise - Salade' className='gout'/>
                        <Input name='Fromage' type='checkbox' value='goutFromage'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='Le Fromage : Fromage de vache - Beurre - Salade' className='gout'/>
                        <Input name='AutreFromage' type='checkbox' value='goutAutreFromage'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='L Autre Fromage : Fromage de chèvre - Légumaise - Salade' className='gout'/>
                        <Input name='Italien' type='checkbox' value='goutItalien'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='L Italien : Jambon cru Italien - Pesto - Légumes grillés' className='gout'/>
                        <Input name='Halal' type='checkbox' value='goutHalal'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='Le Halal : Saucisson de dinde - Salade' className='filled-in'/>
                        <Input name='Aventurier' type='checkbox' value='goutAventurier'
                               onChange={this.HandleChangeSandwich.bind(this)}
                               label='L Aventurier: Découverte - Surprise chaque jour' className='gout'/>
                    </Row>
                    <Row className="taille" required>
                        <p className="form">Appétit de mon enfant</p>
                        <Input s={6} type='select' required onChange={this.HandleChangeSize.bind(this)}>
                            <option defaultValue>Seletionner une taille</option>
                            <option value='Benjamin'>La Benjamine/Le Benjamin : 2 tranches Blanc ou 5 Céréales ou 1/4
                                Baguette
                            </option>
                            <option value='Cadet'>La Cadette/Le Cadet : 4 tranches Blanc ou 5 Céréales ou 1/3 Baguette
                            </option>
                            <option value='Ainé'>L'Ainée/L'Ainé : 6 tranches Blanc ou 5 Céréales ou 1/2 Baguette
                            </option>
                        </Input>
                    </Row>
                    <p className="commande">Ses pains préférés sont (plusieurs choix possibles) :</p>
                    <Row required>
                        <Input name='Blanc' type='radio' value='painBlanc' label='Tartines Pain Blanc'
                               className='choixDuPain' onChange={this.HandleChangeBread.bind(this)}/>
                        <Input name='Cereales' type='radio' value='painCereales' label='Tartines Pain 5 Céréales'
                               className='choixDuPain' onChange={this.HandleChangeBread.bind(this)}/>
                        <Input name='Baguette' type='radio' value='Baguette' label='Baguette'
                               className='choixDuPain' onChange={this.HandleChangeBread.bind(this)}/>
                    </Row>
                    <h5 className="commande">Abonnemant de 1 à 5 jours par semaine. Si vous choisissez 5 jours, vous
                        payez 4 jours et le cinquième est gratuit!</h5>
                    <p className="commande">Jours de la semaine :</p>
                    <Row className="pain" required label="Jours de la semaine :">
                        <Input name='Lundi' type='checkbox' value='Lundi' label='Lundi' className='jourSemaine'
                               onChange={this.HandleChangeDays.bind(this)}/>
                        <Input name='Mardi' type='checkbox' value='Mardi' label='Mardi' className='jourSemaine'
                               onChange={this.HandleChangeDays.bind(this)}/>
                        <Input name='Mercredi' type='checkbox' value='Mercredi' label='Mercredi' className='jourSemaine'
                               onChange={this.HandleChangeDays.bind(this)}/>
                        <Input name='Jeudi' type='checkbox' value='Jeudi' label='Jeudi' className='jourSemaine'
                               onChange={this.HandleChangeDays.bind(this)}/>
                        <Input name='Vendredi' type='checkbox' value='Vendredi' label='Vendredi' className='jourSemaine'
                               onChange={this.HandleChangeDays.bind(this)}/>
                    </Row>
                    <p className="form">Mon enfant n'est pas trop fan :</p>
                    <Row>
                        <Input name='retirerLegumaise' type='checkbox' value='retirerLegumaise' label='de la légumaise'
                               className='retirerCondiment' onChange={this.HandleChangeException.bind(this)}/>
                        <Input name='retirerPesto' type='checkbox' value='retirerPesto' label='du pesto'
                               className='retirerCondiment' onChange={this.HandleChangeException.bind(this)}/>
                        <Input name='retirerBeurre' type='checkbox' value='retirerBeurre' label='du beurre'
                               className='retirerCondiment' onChange={this.HandleChangeException.bind(this)}/>
                        <Input name='retirerSalade' type='checkbox' value='retirerSalade' label='de la salade'
                               className='retirerCondiment' onChange={this.HandleChangeException.bind(this)}/>
                        <Input name='retirerLegumes' type='checkbox' value='retirerLegumes' label='des légumes grillés'
                               className='retirerCondiment' onChange={this.HandleChangeException.bind(this)}/>
                        <p>Cochez ce que vous ne voulez pas comme accompagnement dans les tartines de votre enfant.</p>
                        <Input s={6} label="Détails" Placeholder="Allergies, intolérences, spécificités,..."
                               onChange={this.HandleChangeDetail.bind(this)}/>
                    </Row>
                    <p className="form">Ajouter un fruit ?</p>
                    <Row required>
                        <Input name='fruit' type='radio' value='fruitOui' label='Oui'
                               onChange={this.HandleChangeVegetable.bind(this)}/>
                        <Input name='fruit' type='radio' value='fruitNon' label='Non'
                               onChange={this.HandleChangeVegetable.bind(this)}/>
                    </Row>
                </div>
                <PaiementPaypal prix={this.state.prix}/>

{/*
                <PaiementStripe/>
*/}
                {this.state.prix > 0 && <h1>{this.state.prix} Euros</h1>}
                <ButtonCommande commande={this.state}/>
            </div>

        )
    }
}


export default InscriptionEnfant