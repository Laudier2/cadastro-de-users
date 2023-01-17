import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3004" //'http://3.208.50.76:3004'
})

export { api }