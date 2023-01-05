
import "./navBar.scss";
import logo from "../../asset/logo_home.svg"

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar-logo">
                <img src={logo} alt="logo of SportSee" />
            </div>
            <nav className="navBar-navigation">
                <ul className="navBar-navigation-list">
                    <li className="navBar-navigation-list-elt">
                        Accueil
                    </li>
                    <li className="navBar-navigation-list-elt">
                        Profil
                    </li>
                    <li className="navBar-navigation-list-elt">
                        Réglage
                    </li>
                    <li className="navBar-navigation-list-elt">
                        Communauté
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;