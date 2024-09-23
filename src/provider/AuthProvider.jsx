import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getAuth } from "firebase/auth";
import app from '../firebase/firebaseConfig';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const emailRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const emailLogin = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log('Current user:  ', currentUser);
    })
    return (
      ()=>{
        unSubscribe();
      }
    )
  }, [])



  const authInfo = { user, logOut, emailRegister, emailLogin };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider