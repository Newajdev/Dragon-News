import {createContext } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
    const GoogleLogin =(provider)=>{
        return signInWithPopup(auth, provider)
    }
    const GithubLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const userDetails = { registerUser, loginUser, verifyUser, GoogleLogin, GithubLogin }
    return (
        <AuthContext.Provider value={userDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;