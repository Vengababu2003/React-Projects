import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';


// To Get the Data

function Get_data() {
  const[list,setList]=useState(null)
  const[form,setForm]=useState(null)
  const[lay, setLay]=useState("none")

  useEffect(()=>{
    axios.get("http://18.130.219.171:3200/cont")
    .then((response) => setList(response.data.data.items))
    .catch((error) => console.error("Error", error))
  },[])

  //To post the Data

  // useEffect(()=>{
  //   const data={
  //     full_name:"Venga Babu",
  //     user_email:"vengababu03@gmail.com",
  //     user_mobile:"7981382227",
  //     message:"testing",
  //     status:"unread"
  //   };
  //   const postData = async () => {
  //     try {
  //      await axios.post('http://18.130.219.171:3200/cont', data);
  //     } catch (error) {  
  //         console.error('Error occurred:', error);
  //     }
  //   };
  //   postData();
  // },[]);

  // To Delete the Data

  const Delete =(id)=>{
    if(confirm('Are you sure you want to delete the item?')){
        axios
         .delete(`http://18.130.219.171:3200/cont/${id}`)
        .then(() => {
        setList((list) => list.filter((item) => item.id !== id));
        })
        .catch((error) => console.error(error));        
    }
  }

  // To Edit the Data

  const fetchEdit = (id) => { 
    axios.get('http://18.130.219.171:3200/cont/'+id) 
    .then((response) => { 
        setForm(response.data.data) 
    }) 
    .catch((error) => console.error(error))
    setLay("block");
  }

  // To Submit the Data

  const handlesubmit =(e) =>{
    e.preventDefault(); 
    console.log(form);
    axios
    .put('http://18.130.219.171:3200/cont/'+form.id,form)
    .then((response)=>{
        console.log(response)
        
    })
  };

  const closeOverlay = () => {
    seteditdata('none');
    };
  return (
    <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Message</th>
          <th scope="col">Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
      {list && (
        <>
          {list.map((item)=>{
            return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.user_email}</td>
              <td>{item.user_mobile}</td>
              <td>{item.message}</td>
              <td>{item.status}</td>
              <td>
                <a href="javascript:void(0)" onClick={()=>fetchEdit(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
                </a>
              </td>
              <td>
                <a href="javascript:void(0)" onClick={()=>Delete(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
                </a>
              </td>
            </tr>
            )
          })}
        </>
        )}
      </tbody>
    </table>
      <div id="overlay" style={{display:lay}}>
        <div class="card">
        <a href="" onClick={closeOverlay}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" style={{marginLeft:"750px"}}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg></a>
            <form onSubmit={handlesubmit} className="container mt-4">
              <h1>UPDATE DATA</h1>

              <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">NAME</span>
                <input type="text" className="form-control" id="fullName"value={form && form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}  />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">EMAIL</span>
                <input type="email" className="form-control" id="user_email"value={form && form.user_email} onChange={(e) => setForm({ ...form, user_email: e.target.value })}  />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">PHNO</span>
                <input type="number" className="form-control" id="user_mobile" value={form && form.user_mobile} onChange={(e) => setForm({ ...form, user_mobile: e.target.value })}  />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">MESSAGE</span>
                <input type="textarea" className="form-control" id="message" value={form && form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}  />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="addon-wrapping">STATUS</span>
                <input type="text" className="form-control" id="status" value={form && form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}  />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>  
      </div>
    </div>
  );
}

export default Get_data;
