import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getPageList ,deletepagelist } from './Services';
import Form from './Form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function List() {
    const [contact, setContact] = useState(null);
    const [mode ,setMode] = useState(null);
    const [id,setid]= useState(null)

    useEffect(() => {
        async function fetchData() {
            let data = await getPageList();
            setContact(data);
        }
        fetchData();
    }, []);

    // Function to handle adding data
    const addingdata = () => {
        // Implement the logic for adding data here
        setMode('add')
    };

    // Function to handle editing data
    const Edit = (id)=> {
        // Implement the logic for editing data here
        setMode('edit');
          setid(id);
        
    };
    const Delete= async (id)=> {
    if (window.confirm('Are you sure you want to delete this item?')){
       await deletepagelist(id);
       toast.warning(" Data Deleted Sucessfully !" );
    setContact((Contact) => Contact.filter((item) => item.id !== id));
    }
};
    return (
        <div>
            <h1>CONTACT US</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary" onClick={addingdata}>ADD</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Contate</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contact && contact.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.full_name}</td>
                                <td>{item.user_email}</td>
                                <td>{item.user_mobile}</td>
                                <td>{item.message}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button onClick={() => Edit(item.id)} className="btn btn-outline-secondary btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => Delete(item.id)} className="btn btn-outline-danger btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Form mode={mode} id={id} />
            <ToastContainer/>

        </div>
    );

}

export default List;

