import React, { createContext, useState, useEffect, useContext } from "react";
import { GET_DESTINATIONS_URL } from "../config/urls";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthWrapper";


export const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    const [destinations, setDestinations] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
        try {
            const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
            const data = await apiRequest(GET_DESTINATIONS_URL, 'GET', null, headers);
            
            const loggedUserId = parseInt(localStorage.getItem("userId"), 10);
            const userDestinations = data.filter(destination => destination.user.id === loggedUserId);
            const otherDestinations = data.filter(destination => destination.user.id !== loggedUserId);
            const sortedDestinations = [...userDestinations, ...otherDestinations];
            
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
        <DestinationsContext.Provider value={{ filteredDestinations, filterDestinations }}>
        {children}
        </DestinationsContext.Provider>
    );
};
