import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseConfig';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

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



  const authInfo = { user, logOut, emailRegister, emailLogin, signInWithGoogle };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider