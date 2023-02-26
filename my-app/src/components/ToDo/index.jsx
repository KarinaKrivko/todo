import React, { useState, useEffect } from "react";
import Priority from "../Priority";


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
    <form onSubmit={handleSubmit}>

        <select value={priority} onChange={handlePriority}>
        <option value="Выберите важность" >Выберите важность</option>
            <option value="1">Важно</option>
            <option value="2">Не важно</option>
        </select>

        <select value={selectedWeekday} onChange={handleWeekdayChange}>
        <option value="1">Понедельник</option>
        <option value="2">Вторник</option>
        <option value="3">Среда</option>
        <option value="4">Четверг</option>
        <option value="5">Пятница</option>
        <option value="6">Суббота</option>
        <option value="7">Воскресенье</option>
      </select>

      <input
        placeholder="Описание"
        type="text"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ToDo;
