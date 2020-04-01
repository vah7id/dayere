import React from 'react';
import Time from './time';
import Polar from './polar';
import Individual from './individual';
import Messages from './messages'

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        circle: {
        	name: 'Eclipse'
        },
        individual: {
        	name: 'Individual'
        }
    }
  }
  render() {
	  return (
	    <div className="circle">
	       <div className="diameter" />
	       <h1>{this.state.circle.name}</h1>
	       <Individual {...this.state.individual} />
	       <Messages />
	       <Time />
	       <Polar />
	    </div>
	  );
    }
}

export default Circle;
