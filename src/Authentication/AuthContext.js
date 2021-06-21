import React, { useState, useEffect, useContext } from 'react'
import { auth, googleProvider } from './Firebase'

const AuthContext = React.createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}


const AuthProvider = ( {children} ) => {

    const [currentUser, setCurrentUser] = useState()
    const [checkIfLogin,setCheckIfLogin] = useState(true)
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    //connecting the firebase and makeing sure if the user is there
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //google account sign in
    // const googleLogin = () => {
    //     console.log("Google Login")
    //     auth.signInWithPopup(googleProvider).then((res) => {
    //         console.log(res.user);
    //     }).catch((error) => {
    //         console.log(error.message);
    //     })
    // }
    
    //logging out from the account
    const logout = () => {
        return auth.signOut()
    }

    //checking if a user is logged in if so then it will not be re-loaded
    useEffect(() => {
        const checkUser = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setCheckIfLogin(false)
            setIsAuthenticated(true)
        })
        return checkUser
    }, [])

    //to send the values as a prop so that we will be able to access it from ant component
    const values = {
        currentUser,
        login,
        googleLogin,
        logout,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={values}>
            {!checkIfLogin && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider