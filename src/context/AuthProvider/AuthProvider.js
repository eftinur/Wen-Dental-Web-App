import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Logged in user:', currentUser);
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const updateUser = (userInfo) => {
        setloading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        return signOut(auth)
    } 

    const value = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;