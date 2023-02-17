import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";

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
                    <div className="dashboard-main-user">
                        
                        <p>
                            Oups... La page demandée n'existe pas!
                        </p>
                        <p>
                            retour à l'
                            <a href="/">accueil</a>
                        </p>

                        </div>
                        
                        
                    </div>
                    
                </div>
        )        

}
export default NotFound;