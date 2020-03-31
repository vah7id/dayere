import React from 'react';
import Time from './time';
import Diameter from './diameter';
import Polar from './polar';
import Individual from './individual';
import Messages from './messages'

function Dayere() {
  return (
    <div className="dayere">
       <h1>Eclipse</h1>
       <Individual />
       <Messages />
       <Diameter />
       <Time />
       <Polar />
    </div>
  );
}

export default Dayere;
