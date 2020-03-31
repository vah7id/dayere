import React from 'react';
import moment from 'moment';
import { GiStripedSun } from "react-icons/gi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
    this.state = {
    	time: 0,
    }
  }
  componentWillMount() {
  	window.interval = setInterval(() => {
	  this.calcTime();
    }, 50000);
  }
  componentDidMount() {
  	const fragments = document.querySelectorAll('.eclipse div');
  	fragments.forEach(el => el.style.height = `${window.innerHeight*2}px`);
  	this.el.current.style.top = `${window.innerHeight/2*-1}px`;
  	this.calcTime();
  }
  calcTime() {
  	const start = moment().startOf('day');
	const end = start.clone().endOf('day');
	const now = moment(new Date(), "YYYYMMDD HH:mm:ss");
	const seconds = end.diff(now, "seconds");
	this.setState({ time: seconds });
  }
  render() {
  	let time = this.state.time;
	return (
		<div ref={this.el} className="time">
		   <div class="eclipse">
			  <div class="sun"></div>
			  <div class="moon"></div>
			</div> 
			{ time !== 0 &&
				<div className="clock">
					{time > 86400 ? <GiStripedSun /> : <WiMoonWaningCrescent3 />}
					{moment(new Date()).startOf('day').seconds(time).format('H:mm')}
				</div>
			}
		</div>
	);
  }
}

export default Time;
