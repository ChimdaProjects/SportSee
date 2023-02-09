/**
 * This function displays the page 404
 * @returns {JSX} Render the page 404
 */
const Error = () => {
    return (
        <div>
            <p>
                Oups... La page demandée n'existe pas!
            </p>
            <p>
                retour à l'
                <a href="/">accueil</a>
            </p>
            
        </div>
    )
}
export default Error;