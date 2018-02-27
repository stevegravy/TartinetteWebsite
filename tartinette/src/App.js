import React, { Component } from 'react';
import './App.css';
// Component
import Router from './Router.js';
//CSS
//import './Assets/style.css';
// Rooter
export default class App extends Component{
  render(){
    return(
        <div>
          <Router/>
        </div>
    )
  }
}
