import React , {Fragment} from 'react';
const Card = (props) => {
	return(
	    <div className ="bg-light-green dib br3 pa3 ma2 grow tc">
	     <img alt="robots" src= {`https://robohash.org/${props.ID}`}></img>
		 <h3> {props.NAME} </h3>
         <p> {props.EMAIL} </p>
		</div>
   );
}
export default Card;
   