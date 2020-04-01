import React from 'react';

class Creation extends React.Component {
  componentWillMount() {
  	document.body.style.background = 'black';
  }
  render() {
	  return (
	    <div className="creation">
	    	<div className="container">
	    		<div className="instruction">
		    	   <h1>World is ready for {window.location.pathname.split('/').pop()}</h1>
			       <p>Here is the immutable private key for you as a creator. If you forget the key then you will lose your control as a creator.</p>
			       <h2>D29G</h2>
		       </div>
		       <h3 className="illussion">START</h3>
	        </div>
		    <div className="bg illussion" />
	    </div>
	  );
  }
}

export default Creation;
