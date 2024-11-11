import React, { useEffect, useState } from 'react'
import { EditPageList,postpagelist,putpagelist } from './Services';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form({mode,id}) {
    const[form,setForm]= useState('');
    const[lay,setLay]= useState('none');

    const Edit=async(id) => {
        let editdata = await EditPageList(id);
        setForm(editdata);
        setLay('block')
        console.log(editdata)
    }
    useEffect(()=>{
        if(mode && mode != undefined ){
            if(mode === 'edit')
              Edit(id);
            else(mode === 'add')
              setForm(lay)
              setLay('block')
    }},[mode, id]);

    const closeOverlay=()=>{
        setLay('none')
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.success(" Data Updated Sucessfully !" );
    if (mode === 'edit') {
        await putpagelist(form);
    } else{
        await postpagelist(form);
    }
    closeOverlay();
    }

  return (
    <div>
      <div id="overlay" style={{display:lay}}>
        <div className="form">
        <a href="" onClick={closeOverlay}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16" style={{marginLeft:"480px"}}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg></a>
            <form onSubmit={handleSubmit} className="container mt-4">
            <h1>{mode === 'add' ? 'Add' : 'Edit'} Data</h1>
              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" id="fullName"value={form && form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">E-Mail</span>
                <input type="email" className="form-control" id="user_email"value={form && form.user_email} onChange={(e) => setForm({ ...form, user_email: e.target.value })}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">Contact</span>
                <input type="number" className="form-control" id="user_mobile" value={form && form.user_mobile} onChange={(e) => setForm({ ...form, user_mobile: e.target.value })}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">Message</span>
                <input type="textarea" className="form-control" id="message" value={form && form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}  />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">Status</span>
                <input type="text" className="form-control" id="status" value={form && form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}  />
              </div>

              <button type="submit" className="btn btn-primary" >Save</button> 
              
            </form>
            <ToastContainer/>
        </div>  
      </div>
      
    </div>
  )
}

export default Form

