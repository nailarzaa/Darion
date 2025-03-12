import { createContext } from "react";
import { useCookies } from "react-cookie";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
    const [cookies] = useCookies(['cookie-e'])

    const endPoint = "http://localhost:3007/api";
    const header = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": cookies["cookie-e"]
        }
    }
    return <ApiContext.Provider value={[endPoint, header]}>{children}</ApiContext.Provider>
}
export default ApiContext