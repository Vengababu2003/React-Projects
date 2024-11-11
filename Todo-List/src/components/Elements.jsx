import React, { useState, useEffect } from 'react';
import Todo_List from './Todo_List';

function Elements() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [titles, setTitles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [modelOpenFlag, setmodelOpenFlag]=useState('none');

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"));
    if (saveTasks) {
      setTitles(saveTasks);
    }
  }, []);

  const addingtask = (e) => {
    e.preventDefault();
    const newTask = { title, date, time };

    if (isEditing) {
 
      const updatedTasks = titles.map((task, index) =>
        index === editIndex ? newTask : task
      );
      setTitles(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setIsEditing(false);
      setEditIndex(null);
    } else {
 
      const updatedTasks = [...titles, newTask];
      setTitles(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }


    setTitle("");
    setDate("");
    setTime("");
  };

  const deleteTask = (index) => {
    const updatedTasks = titles.filter((_, i) => i !== index);
    setTitles(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    const task = titles[index];
    setTitle(task.title);
    setDate(task.date);
    setTime(task.time);
    setIsEditing(true);
    setEditIndex(index);
  };

  const openModel=()=>{
    setmodelOpenFlag("block");
  }
  
  return (
    <div>
      <button onClick={openModel}>New</button>
      <div id="overlay" style={{display:modelOpenFlag}}>
      <form onSubmit={addingtask}>
        <div>
          <label htmlFor="Title">Title:</label>
          <input type="text" id="Title" name="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <br />
        <div>
          <label htmlFor="Date">Date:</label>
          <input type="Date" id="Date" name="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <br />
        <div>
          <label htmlFor="Time">Time:</label>
          <input type="Time" id="Time" name="Time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <br />
        <button type="submit">{isEditing ? "Update Task" : "Save Task"}</button>
      </form>
      </div>

      
      <Todo_List results={titles} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default Elements;
