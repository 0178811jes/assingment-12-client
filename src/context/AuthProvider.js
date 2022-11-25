import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthConext = createContext();

const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, currentUser =>{
            console.log('user observe');
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        signIn,
        logout,
        user,
        updateUser,
        loading

    }

    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;