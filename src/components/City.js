import React from 'react';

const City = ({ name }) => {
  return (
	  <li className="nav-item">
		  <a className="nav-link" href="#">{name}</a>
	  </li>
  );
};

export default City;