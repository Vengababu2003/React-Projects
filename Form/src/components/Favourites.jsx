import {React, useEffect } from "react";
import axios from "axios";
import { useState } from "react";


function Favourites() {
    const [list, SetList] = useState(); 
    const [form, setForm] = useState(null); 
   
  useEffect(() => { 
    axios 
    .get('https://reqres.in/api/users') 
    .then((response) => { 
        SetList(response.data.data) 
    }) 
    .catch((error) => console.error(error)); 
  }, []);

  console.log(list)
 
  const fetchEdit = (id) => { 
    axios 
    .get('https://reqres.in/api/users'+id) 
    .then((response) => { 
        setForm(response.data.data) 
    }) 
    .catch((error) => console.error(error)); 
  }
 
//   const fetchEdit = async (id) => { 
//     try { 
//         const response = await axios.get('http://192.168.1.115:3200/contactus/'+id); 
//         setForm(response.data.data) 
//     } catch (error) { 
//         console.error(error) 
//     } 
     
//   } 
 
  return ( 
    <div> 
        {list && ( 
            <> 
                {list.map((item) => { 
                    return <div key={item.id}> 
                        <div>{item.email}</div> 
                        <div>{item.first_name}</div> 
                        <div>{item.last_name}</div>
                       <div><a href="javascriptvoid(0)" onClick={(()=>{fetchEdit})}>edit</a></div>
                    </div> 
                })} 
            </> 
        )} 
        <form> 
            <input type="text" value ={form && form.email} /> 
            <input type="text" value={form && form.first_name} /> 
            <input type="text" value={form && form.last_name} /> 
        </form> 
    </div> 
  )
}

export default Favourites

