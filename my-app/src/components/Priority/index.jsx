import React from 'react';
import { useState } from 'react';


function Priority(props) {
    const [priority, setPriority] = useState("");
    return (
     
        <select name="priority">
        <option value="Выберите важность" selected="selected">Выберите важность</option>
            <option value="1">Важно</option>
            <option  value="2">Не важно</option>
        </select>
       
    );
}

export default Priority;