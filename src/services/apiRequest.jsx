import axios from 'axios';
import { LOG_IN_URL } from '../config/urls';

//ESTE ES EL SERVICIO ORIGINAL Y FUNCIONAL DE API REQUEST, SI NECESITAS PROBAR FORMULARIO DE REGISTRO - 
//DESCOMENTA DE 7 A 33 Y COMENTA DE 39 HASTA EL FINAL

/* export const apiRequest = async (endpoint, method = "GET", data = null, headers = {}) => {
    try {
        
        const response = await axios({
            url: endpoint,   
            method,          
            data,            
            headers,         
        });
        
        return response.data;
    } catch (error) {
        console.error("API request error:", error);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new Error(error.response.data.message || "Something went wrong");
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error("No response received from server");
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new Error(error.message);
        }
    }
};
 */

//ESTE SERVICIO ES UN SIMULACRO PARA PROBAR QUE EL FORMULARIO DE LOGIN FUNCIONE
//CUANDO NO LO NECESITAS MÁS (LA LÓGICA DE BACK ESTARÁ COMPLETA) BORRA DE 34 HASTA EL FINAL Y DESCOMENTA LO DE ARRIBA

export const apiRequest = async (endpoint, method = "GET", data = null, headers = {}) => {
    if (endpoint === LOG_IN_URL) {
        if (data.email === 'test@mail.com' && data.password === 'password123') {
            return { token: 'mocked-jwt-token' }; // Simulate success
        } else {
            throw new Error('Invalid credentials'); // Simulate failure
        }
    }

    throw new Error('Endpoint not handled');
};