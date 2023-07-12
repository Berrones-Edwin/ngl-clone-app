import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


export type UserContextType = {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<UserContextType>({ username: "", setUsername: () => null })

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string>("")

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider