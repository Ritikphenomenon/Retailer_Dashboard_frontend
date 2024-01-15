import axios from "axios";



export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`// Adicionar o token de autenticação no cabeçalho da requisição
    }
})