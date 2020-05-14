import React , {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import './MainApp.css';
import Scroll from '../components/Scroll';

class MainApp extends Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			searchfield : ""
		}
	}
	
	onsearchchange = (event) => {
		this.setState({searchfield:event.target.value});
	    
	}
	
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users").then(response => {
			return response.json();
		}).then(users => {
			this.setState({robots:users});
	})
	}
	
	render(){
		
		const filteredrobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	       })
	     return(
	       <div className="tc">
           <h1>ROBOFRIENDS</h1>
		   <Searchbox searchchange={this.onsearchchange}/>
		   <Scroll>
	        <CardList robots={filteredrobots}/>
		   </Scroll>
		   </div>
	      );
    }
};

export default MainApp;