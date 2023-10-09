import axios from "axios"

export const  api = axios.create({
    baseURL: "https://nubankapi-98bee6987ad9.herokuapp.com"
})