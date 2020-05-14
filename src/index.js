import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import {robots} from './robots';
//import CardList from './CardList';
import MainApp from './containers/MainApp';


ReactDOM.render(
    <MainApp/>  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();