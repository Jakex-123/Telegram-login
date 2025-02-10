//@ts-nocheck
import axios from "axios";

export const sendCode = async ({phoneNumber}:{phoneNumber:string}) => {
    const res = await axios.post('http://localhost:5000/send-code', { phoneNumber });
    console.log(res.data);
};

export const startClient = async ({phoneNumber,phoneCode,password}:{phoneNumber:string}) => {
    const res = await axios.post('http://localhost:5000/login', { phoneNumber,phoneCode,password });
    console.log(res.data);
};

export const getUsers=async ()=>{
    const res = await axios.get('http://localhost:5000/user-info');
    return res;
}