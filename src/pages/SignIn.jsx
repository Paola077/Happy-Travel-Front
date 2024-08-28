import React from "react";
import SignInForm from "../components/signInForm/SignInForm"
import HeaderUser from "../components/header/HeaderUser";

export const SignIn = () => {
    return(
        <div className="w-full h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <SignInForm />
            </main>
        </div>
    )
}