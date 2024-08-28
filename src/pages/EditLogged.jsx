import React from "react";
import { useParams } from "react-router-dom";
import { getUpdateDestinationUrl } from "../config/urls"; 
import CreateEditForm from "../components/forms/createEditForm/CreateEditForm";
import HeaderUser from "../components/header/HeaderUser";

export const EditLogged = () => {

    //DESCOMENTAR Y COMPROBAR QUE RECIBE EL ID DEL DESTINO
    //const { id } = useParams(); // Extract the destination ID from the URL parameters

    const id = 1;
    const updateUrl = getUpdateDestinationUrl(id); // Generate the update URL with the destination ID

    return (
        <div className="w-full h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <CreateEditForm url={updateUrl} method="PUT" headerText="Editar destino"/>
            </main>
        </div>
    );
};
