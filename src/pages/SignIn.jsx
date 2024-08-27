import React from "react";
import SignInForm from "../components/forms/signInForm/SignInForm"

export const SignIn = () => {
    return(
        <div className="w-full h-auto">
            <h1>Header</h1>
            <main className="w-full h-auto flex justify-center items-center">
                <SignInForm />
            </main>
        </div>
    )
}