import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000", // Update with deployed backend URL
    headers: { "Content-Type": "application/json" },
});

export default API;
