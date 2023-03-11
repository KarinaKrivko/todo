import React from "react";
import { useState, useEffect } from "react";
import s from "./index.module.css";

function Weekday(props) {
  const weekdaysMap = {
    0: "Later",
    1: "Mo",
    2: "Tu",
    3: "We",
    4: "Th",
    5: "Fr",
    6: "Sa",
    7: "Su",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    setData(savedData ? JSON.parse(savedData) : []);
  }, []);

  const groupedData = data.reduce((result, item) => {
    const groupKey = item.weekday; // критерий группировки
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});

  console.log(groupedData[1]);
  return (
    <div className={s.data}>
      {data.length === 0 ? (
        <p>No saved data yet</p>
      ) : (
        groupedData[1].map((item, j) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.description}> {item.description}</div>
            ) : (
              <div className={s.prio}> {item.description}</div>
            )}
          </div>
        ))
      )}

      {groupedData[2] !== undefined &&
        groupedData[2].map((item, j) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.descriptionContainer}>
            
                <p className={s.description}>{item.description}</p>
              </div>
            ) : (
              <div className={s.prio}> {item.description}</div>
            )}
          </div>
        ))}
      {groupedData[3] !== undefined &&
        groupedData[3].map((item) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.descriptionContainer}>
         
                <p className={s.description}>{item.description}</p>
              </div>
            ) : (
              <div className={s.descriptionContainer}>
           
                <div className={s.prio}> {item.description}</div>
              </div>
            )}
          </div>
        ))}
      {groupedData[4] !== undefined &&
        groupedData[4].map((item) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.descriptionContainer}>
             
                <p className={s.description}>{item.description}</p>
              </div>
            ) : (
              <div className={s.descriptionContainer}>
      
                <div className={s.prio}> {item.description}</div>
              </div>
            )}
          </div>
        ))}
      {groupedData[5] !== undefined &&
        groupedData[5].map((item) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.descriptionContainer}>
              
                <p className={s.description}>{item.description}</p>
              </div>
            ) : (
              <div className={s.descriptionContainer}>
              
                <div className={s.prio}> {item.description}</div>
              </div>
            )}
          </div>
        ))}
      {groupedData[6] !== undefined &&
        groupedData[6].map((item) => (
          <div>
            <div className={s.weekdayText}>{weekdaysMap[item.weekday]}</div>
            {item.priority == 1 ? (
              <div className={s.descriptionContainer}>

                <p className={s.description}>{item.description}</p>
              </div>
            ) : (
              <div className={s.descriptionContainer}>
               
                <div className={s.prio}> {item.description}</div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Weekday;
