import React, { createContext, useState, useEffect, useContext } from "react";
import { GET_DESTINATIONS_URL, GET_DESTINATIONS_NO_AUTH_URL } from "../config/urls";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthWrapper";

// Create the context
export const DestinationsContext = createContext();

// Create a provider component
export const DestinationsProvider = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    const [destinations, setDestinations] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const url = authToken ? GET_DESTINATIONS_URL : GET_DESTINATIONS_NO_AUTH_URL;

                const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

                const data = await apiRequest(url, 'GET', null, headers);

                let sortedDestinations = [];

                if (authToken) {
                    
                    const loggedUserId = parseInt(localStorage.getItem("userId"), 10);
                    const userDestinations = data.filter(destination => destination.user.id === loggedUserId);
                    const otherDestinations = data.filter(destination => destination.user.id !== loggedUserId);
                    sortedDestinations = [...userDestinations, ...otherDestinations];
                } else {
                    
                    sortedDestinations = data;
                }
                
                setDestinations(sortedDestinations);
                setFilteredDestinations(sortedDestinations);
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };

        fetchDestinations();
    }, [authToken]);

    const filterDestinations = (query) => {
        if (!query) {
            setFilteredDestinations(destinations);
        } else {
            const filtered = destinations.filter(
                (destination) =>
                    destination.title.toLowerCase().includes(query.toLowerCase()) ||
                    destination.location.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredDestinations(filtered);
        }
    };

    return (
        <DestinationsContext.Provider value={{ filteredDestinations, setFilteredDestinations, filterDestinations }}>
            {children}
        </DestinationsContext.Provider>
    );
};
