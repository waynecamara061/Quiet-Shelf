import '../styles/Header.css'

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
                        <li><a href="#my-shelf">Minha estante</a></li>
                        <li><a href="#public-shelf">Outras estantes</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}
export default Header 