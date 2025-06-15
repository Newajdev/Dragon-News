import {createContext } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword (auth, email, password)
    }
    const verifyUser = ()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const userDetails = { registerUser, loginUser, verifyUser }
    return (
        <AuthContext.Provider value={userDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;