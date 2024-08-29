import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { AuthContext } from "../auth/AuthWrapper";

import DestinationCardUser from "../components/card/DestinationCardUser";
import Pagination from "../components/pagination/Pagination";
import HeaderUser from "../components/header/HeaderUser";

const Home = () => {
    const { filteredDestinations } = useContext(DestinationsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const { user } = useContext(AuthContext);

    const currentDestinations = filteredDestinations.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
                    totalItems={filteredDestinations.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Home;
