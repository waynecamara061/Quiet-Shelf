import React from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <input placeholder='NOME/E-MAIL' type="text" autoComplete='off' />
        <input placeholder="PASSWORD" type="password" />

        <button>Entrar</button>
        <p> <Link to="/register">Criar conta</Link> </p>
      </div>
    </div>
  )
}

export default LoginPage