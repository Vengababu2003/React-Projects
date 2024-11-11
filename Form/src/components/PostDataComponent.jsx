import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostDataComponent = () => {
    const [responseData, setResponseData] = useState(null);
    const [retriveData, setRetriveData] = useState(null);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
    const data = {
        name: 'Babu',
        job: 'Writer'
    };
        axios 
        .post('https://reqres.in/api/users',data) 
        .then((response) => { 
            setResponseData(response.data) 
        }) 
        .catch((error) => console.error(error)); 
    }, []); 
    // console.log(responseData);

    useEffect(()=>{
        axios
        .get("https://reqres.in/api/users")
        .then((response)=>{
            setRetriveData(response.data)
        })
        .catch((error) => console.log(error));
    },[]);
    // console.log(retriveData);

    useEffect(()=>{
        axios
        .get("https://reqres.in/api/users")
        .then((response))






        
    })
    return (
        <div>
            <h1>POST Request with useEffect and Axios</h1>
            {responseData ? (
                <div>
                    <h2>Response from server:</h2>
                    <p>{responseData.name}</p>
                    <p>{retriveData.name}</p>
                    <pre>{JSON.stringify(responseData.data, null, 2)}</pre>
                </div>
            ) : (
                <p>Sending data to server...</p>
            )}
        </div>
    );
};

export default PostDataComponent;

