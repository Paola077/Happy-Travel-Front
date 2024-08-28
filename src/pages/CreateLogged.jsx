import React from "react";
import { ADD_DESTINATION_URL } from "../config/urls"; 

import CreateEditForm from "../components/forms/createEditForm/CreateEditForm";


export const CreateLogged = () => {
    return(
        <div className="w-[full] h-auto">
            <h1>Header</h1>
            <main className="w-full h-auto flex justify-center items-center">
                <CreateEditForm url={ADD_DESTINATION_URL} method="POST" headerText="Crear destino"/>
            </main>
        </div>
    )
}