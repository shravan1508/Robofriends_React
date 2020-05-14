import React from 'react';
import Card from './Card';
//import {robots} from './robots';
const CardList = ({robots}) => {
	const CardComp = robots.map((user,i) => {
		return (  <Card NAME={robots[i].name} EMAIL={robots[i].email} ID={robots[i].id} /> )
	});
	return (
	      <div>
		  {CardComp}
		  </div> 
	   );
}

export default CardList;