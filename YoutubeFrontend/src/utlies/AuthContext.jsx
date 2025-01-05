import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isChannel, setIsChannel] = useState(false);

    return (
        <AuthContext.Provider value={{ isChannel, setIsChannel }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
