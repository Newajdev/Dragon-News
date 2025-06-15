import { Children, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const userDetails = { hero: "Newaj" }
    return (
        <AuthContext.Provider value={userDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;