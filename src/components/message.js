import React from 'react';
import { MdHearing } from "react-icons/md";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        voice: new Audio(this.props.message),
    	status: 'silent'
    }
  }
  broadcast() {
    this.state.voice.play();
    this.setState({ status: 'speak' });
    setTimeout(() => {
        this.state.voice.pause();
        this.setState({ status: 'silent' });
    }, 2000);
  }
  render() {
	  return (
	    <div className="message">
            <div onClick={() => this.broadcast()} className="sphere">
              {
                  this.state.status === 'speak' &&
                  <div className="listen">
                    <svg width="80" height="60" viewBox="5 0 80 60">
                      <path class="wave" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
                    </svg>
                  </div>
              }
              {
                  this.state.status === 'silent' &&
                  <div className="silent">
                      <MdHearing />
                  </div>
              }
            </div>
            <div className="orbits">
                {this.props.orbits.map((orbit, orbIndex) => 
                    <div style={{'zIndex': (this.props.index+1)*(orbIndex+1)}} className={`orbit-${orbIndex+1}`}></div>)}
            </div>
            <span>{this.props.individual}</span>
        </div>
	  );
  	}
}

export default Message;
