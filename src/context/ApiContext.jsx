import { createContext } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({children})=>{
    
    const endPoint = "http://localhost:3007";
    const header = {
        headers:{
            "Content-Type": "application/json",
        }
    }
    return <ApiContext.Provider value={[endPoint,header]}>{children}</ApiContext.Provider>
}