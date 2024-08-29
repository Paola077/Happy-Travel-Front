import React, { useContext, useEffect, useState } from "react";
import HeaderUser from "../components/header/HeaderUser";
import DestinationCardUser from "../components/card/DestinationCardUser";
import { GET_DESTINATIONS_URL } from "../config/urls";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthWrapper";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const { authToken, user } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
                const data = await apiRequest(GET_DESTINATIONS_URL, 'GET', null, headers);
                console.log("Fetched Destinations:", data);
                setDestinations(data);
            } catch (error) {
                console.error('Error al obtener los destinos: ', error);
            }
        };
        fetchDestinations();
    }, [authToken]);

    // Calculate the slice of destinations to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentDestinations = destinations.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full h-auto">
            <HeaderUser />
            <div className="w-full flex flex-col justify-center">
                <div className="mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentDestinations.map((destination) => (
                        <DestinationCardUser
                            key={destination.id}
                            destination={destination}
                            currentUser={user}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalItems={destinations.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default Home;
