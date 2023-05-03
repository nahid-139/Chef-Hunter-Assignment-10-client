import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.confiq';


export const auth = getAuth(app);
export const AuthContext= createContext()

const UserContext = ({children}) => {

  const [user,setUser]=useState(null)
  const [loader,setLoader]=useState(true)
 const googleProvider=new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider();

// signinGoogle part start
 const signinGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
 } 
// signinGithub part start
 const signinGithub=()=>{
    return signInWithPopup(auth,githubProvider)
 }
// onAuthStateChanged part start
 useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
   setUser(currentUser)
   setLoader(false)
 })
 return ()=> unsubscribe()
 },[])

// logout part start
 const logOut=()=>{
    return signOut(auth)
 }
//  createuser part start
 const createUser=(email,password)=>{
    setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password)
 }
// signIn part start
 const signIn=(email,password)=>{
    setLoader(true)
return signInWithEmailAndPassword(auth,email,password)
 }
//  forgerpassword part start
 const forgetPassword=(email)=>{
    setLoader(true)
return sendPasswordResetEmail(auth,email)
 }
//  updateName part start
 const userUpdateName=(name,photoURL)=>{
    setLoader(true)
  return updateProfile(auth.currentUser,{displayName:name, photoURL:photoURL})
 }
   const authInfo= {user,loader,signinGoogle,signinGithub,logOut,createUser,signIn,userUpdateName,forgetPassword}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;