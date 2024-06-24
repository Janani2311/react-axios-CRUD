import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://666c3e7149dbc5d7145d49d1.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService