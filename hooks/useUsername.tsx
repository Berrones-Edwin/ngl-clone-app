import { UserContext } from "@/context/UserContextProvider"
import { useContext } from "react"

export const useUsername = () => {
    const { username, setUsername } = useContext(UserContext)
    return { username, setUsername }
}