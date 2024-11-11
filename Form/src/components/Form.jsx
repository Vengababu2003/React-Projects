import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Form() {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [id,setId]=useState("");
    const [m,setMale]=useState("");
    const [f,setFemale]=useState("");
    
    const [description,setDescription]=useState("");    

  return (
    <div >
        <div style={{backgroundColor:'lightgreen',padding:'5px'}}>
            <form >
                <h1>Student Form</h1>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={fname}  onChange={(e) => setFname(e.target.value)}/>
                </div>
                <div>
                <label>Last Name :</label>
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
                </div>
                <div>
                <label>College Id :</label>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <div>
                <label>Gender</label>
                    <label>:  Male</label>
                    <input type="radio" id=" Male" name="gender" value={m}  onChange={(e) => setMale(e.target.value)}/>
                    <label>Female</label>
                    <input type="radio" id=" Female" name="gender" value={f} onChange={(e) => setFemale(e.target.value)}/>
                </div>
                <div>
                <label>Languages :</label>
                
                    <label>Python</label>
                    <input type='checkbox'  name="lang" value="python" onChange={(e) => (e.target.value)}/>
                    <label>C</label>
                    <input type="checkbox"  name="lang" value="c" onChange={(e)=> (e.target.value)}/>
                    <label>Java</label>
                    <input type="checkbox"  name="lang" value="java" onChange={(e)=> (e.target.value)}/>
                    <label>Java Script</label>
                    <input type="checkbox"  name="lang" value="javasctipt" onChange={(e)=> (e.target.value)}/>
                </div>
                <div style={{ backgroundColor: 'lightgreen', padding: '5px' }}>
                <label>Course</label>
                <select >
                    <option value="" disabled selected>select</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>Mech</option>
                    <option>Civil</option>
                </select>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <button type='submit'>Enter</button>
            </form>
        </div>
    </div>
  )
}

export default Form

