import { ReactNode, createContext, useState } from "react";


export const UserContext = createContext<{ username: string }>({ username: "" })

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string>("")

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider