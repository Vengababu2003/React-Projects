import React, { useEffect } from 'react'; 
import axios from 'axios'; 
import { useState } from 'react' 
 
function List()  { 
    const [list, SetList] = useState(null); 
    const [form, setForm] = useState(null); 
   
  useEffect(() => { 
    axios 
    .get('http://192.168.1.115:3200/contactus') 
    .then((response) => { 
        SetList(response.data.data.items) 
    }) 
    .catch((error) => console.error(error)); 
  }, []); 
 
  const fetchEdit = (id) => { 
    axios 
    .get('http://192.168.1.115:3200/contactus/'+id) 
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
    <div className='forms'> 
        {list && ( 
            <> 
                {list.map((item) => { 
                    return <div key={item.id}> 
                        <div>{item.full_name}</div> 
                        <div>{item.user_email}</div> 
                        <div><a href="javascript:void(0)" onClick={() => fetchEdit(item.id)}>Edit</a></div> 
                    </div> 
                })} 
            </> 
        )} 
        <form> 
            <input type="text" value ={form && form.full_name} /> 
            <input type="text" value={form && form.user_email} /> 
        </form> 
    </div> 
  ) 
} 
 
export default List