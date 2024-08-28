import React, { useContext, useEffect, useState } from "react";
import HeaderUser from "../components/header/HeaderUser";
import DestinationCardUser from "../components/card/DestinationCardUser";
import { GET_DESTINATIONS_URL } from "../config/urls";
import { apiRequest } from "../services/apiRequest";
import { AuthContext } from "../auth/AuthWrapper";


const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const {authToken} = useContext(AuthContext);

    console.log("Auth Token:", authToken);


    useEffect(()=>{
        const fetchDestinations  = async () => {
            try{
                const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
                console.log("Headers:", headers);
                const data = await apiRequest(GET_DESTINATIONS_URL, 'GET', null, headers);
                setDestinations(data)
            }catch (error) {
                console.error('Error al obtener los destinos: ', error);
            }
        };
        fetchDestinations ();
    }, [authToken]);
    return(
        <>
            <HeaderUser />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                    <DestinationCardUser 
                    key={destination.id}
                    imageSrc={destination.url_image}
                    title={destination.title}
                    subtitle={destination.location}/>
                ))}
            </div>
            
        </>
    )
}

export default Home;
