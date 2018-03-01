import React, { Component } from 'react';

function actionPanicBouton() {
    function clickActionPanicBouton(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <a href="#" onClick={clickActionPanicBouton}>
            Click me
        </a>
    );
}


class CommandeBouton extends React.Component {
    render() {
        return(
            <div className="commandebouton">
                <button onclick = {actionPanicBouton}>Commandez</button>
            </div>
        )
    }
}

export default CommandeBouton;



