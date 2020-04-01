import React from 'react';
import { FiLock } from "react-icons/fi";

function individual(props) {
  return (
    <div className="individual">
    	{props.name}
    	<FiLock />
    </div>
  );
}

export default individual;
