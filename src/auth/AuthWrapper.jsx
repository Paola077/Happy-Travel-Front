import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedToken) setAuthToken(storedToken);
    }, []);

    const login = (userData, token) => {
        
        const updatedUserData = {
            ...userData,
            id: userData.id
        };

        setUser(updatedUserData);
        setAuthToken(token);
        localStorage.setItem('userId', updatedUserData.id); 
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
    }

    return (
        <AuthContext.Provider value={{ user, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
