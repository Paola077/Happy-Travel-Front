import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedToken) setAuthToken(storedToken);
    },[]);

    const login = (userData, token) => {
        console.log("Login triggered, saving token:", token); //Debugging
        setUser(userData);
        setAuthToken(token);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
    }

    return (
        <AuthContext.Provider value={{user, authToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
