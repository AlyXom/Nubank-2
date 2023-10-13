import axios from "axios"

export const api = axios.create({
    baseURL: "https://nubankapi.onrender.com"
})