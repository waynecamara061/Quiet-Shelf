import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <nav className="header-content">
                <div className="floating-header">
                    {/* TODO: dinamismo no nome -> retornar username */}
                    <div className="header-logo">
                        GRUPO 28
                    </div>

                    <ul className="header-links">
                        {/* TODO: tornar privado acesso a 'minhas estantes', forçando o login para efetuar ações*/}
                        <li> <Link to="/my-shelf">Minha estante</Link> </li>
                        <li> <Link to="/public-shelf">Estante compartilhada</Link> </li>
                        <li> <Link to="/register">Criar conta</Link> </li>
                        <li> <Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}
export default Header 