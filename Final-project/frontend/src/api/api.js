
import axios from 'axios';
export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5800";

const api = axios.create({
    baseURL:API_BASE,
});
export default api;

export const imageUrl = (filename) =>{
    if(!filename) return "";
    return `${API_BASE}/uploads/${filename}`;
};