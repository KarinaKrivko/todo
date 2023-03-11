import React, { useState, useEffect } from "react";
import s from './index.module.css';



function ToDo() {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedWeekday, setSelectedWeekday] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    setTasks(savedTasks ? JSON.parse(savedTasks) : []);
  }, []);


  const handleSubmit = (event) => {

    event.preventDefault();
    const newTask = { description, priority: priority, weekday: selectedWeekday };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setDescription("");

  };

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };


  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <select className={s.weekDay} value={selectedWeekday} onChange={handleWeekdayChange}>
          <option value="Select a day">Select a day</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>

        <select className={s.prio} value={priority} onChange={handlePriority}>
          <option value="Select priority" >Select priority</option>
          <option value="1">High</option>
          <option value="2">Low</option>
        </select>

        <input className={s.descr}
          placeholder="Description"
          type="text"
          value={description}
          onChange={handleInputChange}
        />

        <button className={s.btn} type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDo;
