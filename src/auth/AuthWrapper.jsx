import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

    useEffect(() => {
        console.log("Auth useEffect is running");
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');
        console.log("Stored User:", storedUser);
        console.log("Stored Token:", storedToken);

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedToken) setAuthToken(storedToken);
    }, []);

    const login = (userData, token) => {
        // Extraer el ID desde el rol si no está en el nivel superior
        const updatedUserData = {
            ...userData,
            id: userData.id || userData.roles?.[0]?.id  // Usa el id del rol si no existe en el nivel superior
        };

        console.log("Updated User Data:", updatedUserData);
        setUser(updatedUserData);
        setAuthToken(token);
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId')
    }

    return (
        <AuthContext.Provider value={{ user, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
