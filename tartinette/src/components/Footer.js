import React from 'react';
import legumes_vert from '../images/legumes_vert.png';
import './Footer';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src={legumes_vert} alt="image de légumes"/>
            </div>
        )
    }
}

export default Footer;

