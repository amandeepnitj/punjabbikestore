import React,{useContext, useEffect, useState} from 'react';
import auth from '../Firebase.js'
/**
* @author
* @function AuthProvider
**/
const AuthContext= React.createContext();

 function useAuth()
{
    return useContext(AuthContext)
}
function AuthProvider({children})
{
    const [currentUser, setCurrentUser]=useState();
    function signup(email,password)
    {
        return auth.createUserWithEmailAndPassword(email,password);
    }
    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    
    const value ={ currentUser, signup}
  return(
     <AuthContext.Provider value={value} >
         <div>AuthProvider</div>
         {children}
     </AuthContext.Provider>
    
   )

 }

 export {useAuth, AuthProvider} ;
