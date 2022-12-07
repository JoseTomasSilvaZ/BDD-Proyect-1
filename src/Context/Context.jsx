import { createContext, useState } from "react"
export const UserContext = createContext()

export const ContextProvider = ({children}) => {
    const [userData, setUserData] = useState({isLogged:false})
    return(

                <UserContext.Provider value={{userData, setUserData}} >
                {children}
            </UserContext.Provider>
        )
}
