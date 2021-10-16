import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LoginForm/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [users, setUsers]=useState({})
    const [isLoading, setIsLoading]=useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUsers(result.user)
        }).finally(()=> setIsLoading(false))
    }
// observe user state changed
    useEffect(() => {
      const unsubscribed= onAuthStateChanged(auth, user => {
            if (user)
            {
                setUsers(user)
            }
            else
            {
                setUsers({})
          }
          setIsLoading(false)
        })
        return ()=> unsubscribed
    }, [])
    

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=> setIsLoading(false))
   }

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;