import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ContextProvider = ({children})=>{
    const [data, setdata] = useState(null)

    return(
        <StateContext.Provider value={{data}}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = useContext(StateContext);