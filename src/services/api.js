import axios from "axios";

const base_URL = "http://localhost:5000";

async function creatUser(user){
    axios.post(`${base_URL}/sign-up`, user);
}

async function login(data){
    const token = await axios.post(`${base_URL}/login`, data);
    return token;
}

const api = {
    creatUser
}

export default api;