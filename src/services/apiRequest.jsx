import axios from 'axios';

export const apiRequest = async (endpoint, method = "GET", data = null, headers = {}) => {
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

