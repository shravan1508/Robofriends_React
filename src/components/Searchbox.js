import React from 'react';
const Searchbox = ({searchfielfd,searchchange}) => {
	return (
         <input className="bg-light-blue" type={"search"} placeholder={"Robot search"} onChange={searchchange}/>
	);
}

export default Searchbox;
    