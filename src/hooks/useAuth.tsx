import React, { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router';

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    getIdTokenResult,
    onAuthStateChanged,
    updateProfile,
    IdTokenResult,
    Auth
} from 'firebase/auth';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

interface UseAuthProviderReturn {
    signIn: (email: string, password: string) => Promise<void>,
    logOut: () => void,
    getToken: () => Promise<IdTokenResult | "no user">,
    isLoggedIn: () => Promise<boolean>,
    updateName: () => void,
    auth: Auth
}

const useAuthProvider = (): UseAuthProviderReturn => {

    const auth = getAuth();

    const signIn = async (email: string, password: string) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            return "Authentication error";
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            Router.push("/login");
        } catch (error) {
            console.log(error);
        }
    }

    const getToken = async () => {
        if (auth.currentUser) {
            return await getIdTokenResult(auth.currentUser);
        } else {
            return "no user";
        }
    }

    async function isLoggedIn(): Promise<boolean> {
        try {
            await new Promise((resolve, reject) =>
                auth.onAuthStateChanged(
                    user => {
                        if (user) {
                            resolve(user)
                        } else {
                            reject('no user logged in')
                        }
                    },
                    error => reject(error)
                )
            )
            return true
        } catch (error) {
            return false
        }
    }

    async function updateName(): Promise<void> {
        try {
            await updateProfile(auth.currentUser, {
                displayName: "Alan Oliveira"
            });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        signIn,
        logOut,
        getToken,
        isLoggedIn,
        updateName,
        auth
    }
}

export const AuthContextProvider = ({ children }) => {
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (Component) => {
    const AuthComponent = (props) => {

        const [isAuthenticaded, setIsAuthenticaded] = useState(false);
        const { isLoggedIn } = useAuth();

        useEffect(() => {
            isLoggedIn()
                .then(result => {
                    if (!result) {
                        Router.push("/login");
                    } else {
                        setIsAuthenticaded(true);
                    }
                });
        }, []);

        return (
            <>
                {isAuthenticaded ? <Component {...props} /> : <></>}
            </>
        )
    }

    return AuthComponent;
}