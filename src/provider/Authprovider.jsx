/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
  export const AuthContext = createContext(null);
  
  const auth = getAuth(app);
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const [loading, setLoading] = useState(true);

    const [error, setError]= useState(null);
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider()

    const googleLogIn = ()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }

    const githubLogIn = ()=>{
      setLoading(true);
      return signInWithPopup(auth, githubProvider)
    }


  
    const logIn = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const logOut = ()=>{
      setLoading(true)
      return signOut(auth);
    }
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
      });
      return () => {
        unSubscribe()
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      error, 
      setError,
      createUser,
      logIn,
      googleLogIn,
      githubLogIn,
      logOut
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  