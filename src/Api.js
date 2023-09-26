import axios from 'axios';
axios.defaults.baseURL ='https://6511c5efb8c6ce52b395054c.mockapi.io';
export const  fetchContacts =async()=>{
const {data} =await axios.get('/contacts/contacts');
return data;
} 