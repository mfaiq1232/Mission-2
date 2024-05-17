import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ContextProvider = ({children})=>{

    const [credentials, setCredentials] = useState({email:'', password:'', name:'', profession:''});

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    return(
        <StateContext.Provider value={{credentials, setCredentials, onChange}}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = ()=> useContext(StateContext);