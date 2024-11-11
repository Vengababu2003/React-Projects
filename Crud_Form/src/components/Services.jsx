import axios from 'axios';

export async function getPageList() {
    try {
        const response = await axios.get('http://18.130.219.171:3200/cont');
        
        return response.data.data.items; 
    } catch (error) {
        return error;
    }
}


export async function EditPageList(id)
 {
    try {
        const response = await axios.get('http://18.130.219.171:3200/cont/' +id);
        return response.data.data; 
    } catch (error) {
        return error;
    }
}

export async function putpagelist(form) {
    try {
        const response = await axios.put('http://18.130.219.171:3200/cont/'+form.id,form);
        return response; 
    } catch (error) {
        return error;
    }
  }

  export async function postpagelist(form) {
    try {
        const response = await axios.post('http://18.130.219.171:3200/cont', form)
        return response; 
    } catch (error) {
        return error;
    }
  }

  export async function deletepagelist(id)
 {
    try {
        const response = await axios.delete('http://18.130.219.171:3200/cont/' + id)
        return response; 
    } catch (error) {
        return error;
    }
  }