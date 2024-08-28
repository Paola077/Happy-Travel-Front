import React from "react";
import LogInForm from "../components/forms/logInForm/LogInForm"

export const Login = () => {
    return(
        <div className="w-full h-auto">
            <h1>Header</h1>
            <main className="w-full h-auto flex justify-center items-center">
                <LogInForm />
            </main>
        </div>
    )
}