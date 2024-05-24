import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/data.json", // URL de base
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
    }
};
