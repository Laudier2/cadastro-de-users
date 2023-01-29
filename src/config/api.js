import axios from "axios";

const api = axios.create({
    baseURL: "https://api-estoque.herokuapp.com" //'http://3.208.50.76:3004'
})

export { api }