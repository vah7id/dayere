import React from 'react';
import Message from './message';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	messages: [{
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		individual: 'agent01',
    		orbits: [{}, {}],
    	},{
    		individual: 'agent01',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [],
    	},{
    		individual: 'agent03',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [{}],
    	},{
    		individual: 'agent05',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [{}, {}],
    	},{
    		individual: 'agent02',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [],
    	},{
    		individual: 'agent06',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [{}, {}],
    	},{
    		individual: 'agent04',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [{}],
    	},{
    		individual: 'agent09',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [],
    	},{
    		individual: 'agent07',
    		message: 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_animals_bird_nest_short_hard_fast_single_movement_hay_bushy_003_47106.mp3?_=1',
    		orbits: [{}],
    	}],
    }
  }
  render() {
	  return (
	    <div className="messages">
	    {
	    	this.state.messages.map((message, msgIdx) => 
	    		(<Message {...message} index={msgIdx} />))
	    }
	    </div>
	  );
  }
}

export default Messages;
