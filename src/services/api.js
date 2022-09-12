import axios from "axios";

const base_URL = "http://localhost:5000";

async function creatUser(user){
    axios.post(`${base_URL/sign-up}`, user);
}

const api = {
    creatUser
}

export default api;