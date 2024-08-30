import React from "react";
import { useParams } from "react-router-dom";
import { getUpdateDestinationUrl } from "../config/urls"; 
import CreateEditForm from "../components/forms/createEditForm/CreateEditForm";
import HeaderUser from "../components/header/HeaderUser";

export const EditLogged = () => {
    const { id } = useParams(); 
    console.log(id); 

    const updateUrl = getUpdateDestinationUrl(id); 
    console.log(updateUrl);

    return (
        <div className="w-full h-auto">
        <HeaderUser />
        <main className="w-full h-auto flex justify-center items-center">
            <CreateEditForm
            url={updateUrl}
            method="PUT"
            headerText="Editar destino"
            />
        </main>
        </div>
    );
};
