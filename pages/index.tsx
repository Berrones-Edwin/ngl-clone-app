import { useState } from "react"

export default function Home() {
  const [user, setUser] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)
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
    </main>
  )
}
