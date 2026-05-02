import React from 'react'
import "../styles/register.css"
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Criar conta</h1>

        <input placeholder='NOME' type="text" autoComplete='off' />
        <input placeholder='E-MAIL' type="text" autoComplete='off' />
        <input placeholder="PASSWORD" type="password" />

        <button>CRIAR CONTA</button>
        <p> <Link to="/login">Fazer login</Link> </p>
      </div>
    </div>
  )
}

export default RegisterPage