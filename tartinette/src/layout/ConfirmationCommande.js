import React from 'react';

class ConfirmationCommande extends React.Component {
    render() {
        return (
            <div className="recap">
                {this.props.recap.nom}
                {this.props.recap.prenom}
                {this.props.recap.ecole}
                {this.props.recap.classe}
                {this.props.recap.sandwich}
                {this.props.recap.taille}
                {this.props.recap.pain}
                {this.props.recap.jour}
                {this.props.recap.exception}
                {this.props.recap.detail}
                {this.props.recap.legume}
                {this.props.recap.prix}
            </div>
        )
    }
}

export default ConfirmationCommande;



