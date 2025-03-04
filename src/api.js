import axios from "axios";

const API = axios.create({
    baseURL: "https://sample-1-ep8b.onrender.com", // Update with deployed backend URL
    headers: { "Content-Type": "application/json" },
});

export default API;
