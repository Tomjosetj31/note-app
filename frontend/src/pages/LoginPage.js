import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='container'>
        <form>
          <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </form>
    </div>
  )
}

export default LoginPage