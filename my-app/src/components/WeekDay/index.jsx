import React from 'react';
import { useState, useEffect } from "react";

function Weekday(props) {

    const weekdaysMap = {
        0: 'Потом',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье',
      };

    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('tasks');
        setData(savedData ? JSON.parse(savedData) : []);
      }, []);


    
    return (
        <div>
     
         {
             data.length === 0 ? (
                <p>No saved data yet</p>
              ) :
         data.map((item) => (
          <div>
            {weekdaysMap[item.weekday]}:
                 <p> {item.description}</p>
          </div>
                    ))
         }
        </div>
    );
}

export default Weekday;