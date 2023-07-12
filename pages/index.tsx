import { data } from "@/data/data"
import { useUsername } from "@/hooks/useUsername"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Home() {
  const [user, setUser] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()
  const {setUsername} = useUsername()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = data.find(d => d.username === user)
    setUsername(user)
    
    if (!newUser) {
      // redirect dashboard

      router.push("/dashboard")
    } else {
      // show error
      setError("The username has already chosen, please try another")
    }
  }

  return (
    <main style={{ backgroundColor: "#ccc", minWidth: '100vh' }}>
      <article>
        <form onSubmit={handleSubmit}>
          <input type="text"
            autoComplete="off"
            required
            placeholder="@my_user"
            value={user}
            onChange={(e) => setUser(e.target.value)} />
          <button>Register</button>
        </form>
      </article>
      {/* Error */}
      <article>
        {
          error.length === 0 ? null : <p>{error}</p>
        }
      </article>
    </main>
  )
}
