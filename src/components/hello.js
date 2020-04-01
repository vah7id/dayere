import React from 'react';
import cover from '../resources/cover2.jpg';

class Hello extends React.Component {
  constructor(props) {
  	super(props);
  	this.circle = React.createRef();
  }
  componentWillMount() {
  	document.body.style.background = 'black';
  }
  create() {
  	const name = this.circle.current.value;
  	if(name.length > 1) {
  		window.location.assign('/hello-world/'+name);
  	}
  }
  render() {
	  return (
	    <div className="hello illussion">
	       <div class="row">
			    <div class="col-xs-12 col-sm-6 col-md-6">
			        <h1>DAYERE</h1>
			        <p>Welcome to the milky circle. Create new circle and communicate.</p>
			        <input ref={this.circle} name="circle" placeholder="What's the name of your circle?" maxlength="16" type="text" />
			        <button onClick={() => this.create()}>CREATE</button>
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
