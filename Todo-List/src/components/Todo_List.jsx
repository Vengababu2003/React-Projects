import React from 'react';

function Todo_List({ results, deleteTask, editTask }) {

  if (results.length === 0) {
    return null; 
  }

  return (
    <div className="card-container">
      <ul>
        {results.map((item, index) => (
          <li key={index} className="data">
            <input type="checkbox" id="Title" name="Title" className="checkbox" />
            <div className="list">
              <h2>{item.title}</h2>
              {item.date}, {item.time}
              <button className="Edit_Button" onClick={() => editTask(index)}>Edit</button>
              <button className="Delete_Button" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo_List;

