import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";
import "./notfound.scss"
/**
 * This function displays the page 404
 * @returns {JSX} Render the page 404
 */
const NotFound = () => {
    return (
        <div className="dashboard">
                <NavBar />
                <div className="dashboard-main">
                    <NavBarLeft />
                    <div className="error">
                        
                        <p className="error-text">
                            Oups... La page demandée n'existe pas!
                        </p>
                        <p className="error-link">
                            Retour à l'
                            <a href="/">accueil</a>
                        </p>

                        </div>
                        
                        
                    </div>
                    
                </div>
        )        

}
export default NotFound;