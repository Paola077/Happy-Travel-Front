import React from "react";
import { ADD_DESTINATION_URL } from "../config/urls"; 

import CreateEditForm from "../components/forms/createEditForm/CreateEditForm";
import HeaderUser from "../components/header/HeaderUser";


export const CreateLogged = () => {
    return(
        
        <div className="w-[full] h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <CreateEditForm url={ADD_DESTINATION_URL} method="POST" headerText="Crear destino" succesAlertMessage="Nuevo destino creado con éxito!"/>
            </main>
        </div>
    )
}