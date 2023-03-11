import React from 'react';
import { useState } from 'react';


function Priority(props) {
    const [priority, setPriority] = useState("");
    return (
     
        <select>
        <option value="Select priority" selected="selected">Select priority</option>
            <option value="1">High</option>
            <option  value="2">Low</option>
        </select>
    
    );
}

export default Priority;