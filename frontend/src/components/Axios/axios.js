import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/api/todo"
})

export default instance