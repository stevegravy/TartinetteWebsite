import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
//CSS
import './PaiementPaypal.css';

export default class PaiementPaypal extends React.Component {

    render() {
        let style= {
            size: 'large',
            color: 'gold',
            shape: 'rect',
            label: 'pay',
        }
            const client = {
                sandbox: 'ATZ-wUaJQwwCKvcEQQ88ik5JvvJ63xEYSY93mFRdN9nkQUTHVUcvFA93FskutDJkkJwE57OR_SQg5zaO',
                production: 'contact@stevegravy.com',
            }
        return (
            <PaypalExpressBtn client={client} currency={'EUR'} total={this.props.prix} style={style} />
        );
    }
}