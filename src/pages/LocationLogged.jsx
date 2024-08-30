import React, {useEffect, useState} from "react";
import HeaderUser from "../components/header/HeaderUser";
import CustomCardLocationLogged from "../components/card/CustomCardLocationLogged";
import { useParams } from "react-router-dom";
import { apiRequest } from "../services/apiRequest";
import { getDestinationDetailsUrl } from "../config/urls";


export const LocationLogged = () => {
    const { id: destinationId } = useParams();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchDestinationDetails = async () => {
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            try {
                const url = getDestinationDetailsUrl(destinationId);
                const response = await apiRequest(url, "GET", null, headers);
                setDestination(response);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (destinationId) { 
            fetchDestinationDetails();
        } else {
            setLoading(false);
            setError("Destination ID is missing.");
        }
    }, [destinationId]);

    if (loading) return <p>Loading destination details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <HeaderUser />
            {destination && (
                <CustomCardLocationLogged 
                    urlImage={destination.urlImage}
                    title={destination.title || 'Sin título'}
                    location={destination.location || 'Sin ubicación'}
                    description={destination.description || 'Sin descripción'}
                    id={destinationId}
                />
            )}
        </>
    );
};