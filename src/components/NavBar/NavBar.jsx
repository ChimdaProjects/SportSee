
import "./navBar.scss";
import logo from "../../asset/logo_home.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar-logo">
                <Link to="/">
                    <img src={logo} alt="logo of SportSee" />
                </Link>
               
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