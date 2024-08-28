import React from "react";
import LogInForm from "../components/forms/logInForm/LogInForm"
import HeaderUser from "../components/header/HeaderUser";

export const Login = () => {
    return(
        <div className="w-full h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <LogInForm />
            </main>
        </div>
    )
}