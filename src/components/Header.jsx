import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header(isAuthenticated) {
    return (
        <div className="header-container">
            <nav className="header-content">
                <div className="floating-header">
                    {/* TODO: dinamismo no nome -> retornar username */}
                    <div className="header-logo">
                        GRUPO 28
                    </div>

                    <ul className="header-links">
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