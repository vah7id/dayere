import React from 'react';
import cover from '../resources/cover2.jpg';

class Hello extends React.Component {
  componentWillMount() {
  	document.body.style.background = 'black';
  }
  render() {
	  return (
	    <div className="hello illussion">
	       <div class="row">
			    <div class="col-xs-12 col-sm-6 col-md-6">
			        <h1>DAYERE</h1>
			        <p>Welcome to the milky circle. Create new circle and communicate.</p>
			        <input name="circle" placeholder="What's the name of your circle?" type="text" />
			        <button>START</button>
			    </div>
			    <div class="col-xs-12 col-sm-6 col-md-6">
			        <img alt={'milky circle'} src={cover} />
			    </div>
			</div>
	    </div>
	  );
  }
}

export default Hello;
