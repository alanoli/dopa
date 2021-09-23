import React, { createContext, useContext, useState } from 'react';
import Router from 'next/router';

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    getIdTokenResult,
    onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const useAuthProvider = () => {

    const auth = getAuth();

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Router.push("/habits");
        } catch (error) {
            console.log(error);
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

    return {
        signIn,
        logOut,
        getToken,
        isLoggedIn
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

        isLoggedIn()
            .then(result => {
                if (!result) {
                    router.push("/login");
                } else {
                    setIsAuthenticaded(true);
                }
            });

        return (
            <>
                {isAuthenticaded ? <Component {...props} /> : <></>}
            </>
        )
    }

    return AuthComponent;
}