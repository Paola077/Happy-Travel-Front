import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { AuthContext } from "../auth/AuthWrapper";
import { apiRequest } from "../services/apiRequest";
import { getDeleteDestinationUrl } from "../config/urls";

import DestinationCardUser from "../components/card/DestinationCardUser";
import Pagination from "../components/pagination/Pagination";
import HeaderUser from "../components/header/HeaderUser";

const Home = () => {
    const { filteredDestinations, setFilteredDestinations } = useContext(DestinationsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const { user } = useContext(AuthContext);

    const currentDestinations = filteredDestinations.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDelete = async (destinationId) => {
        try {
            const headers = {
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,  // Asumiendo que guardas el token en sessionStorage
              'Content-Type': 'application/json'
            };
            await apiRequest(getDeleteDestinationUrl(destinationId), "DELETE",  null, headers);
            //alert('Destino eliminado con éxito');
            setFilteredDestinations((prevDestinations) =>
                prevDestinations.filter((dest) => dest.id !== destinationId)
            );
            
            //navigate("/");  
          } catch (error) {
            console.error("Home: Error al eliminar el destino:", error);
          }
      };

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
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalItems={filteredDestinations.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Home;
