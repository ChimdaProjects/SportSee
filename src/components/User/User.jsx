import "./user.scss"
import PropTypes from 'prop-types';

/**
 * This function displays the header of the dashboard
 * @param {String} name - firstname of the user 
 * @returns {JSX} render the header of the dashboard
 */
const User = ({name}) => {

    return (
        <div className="user">
            <h1 className="user-title">Bonjour <span className="user-name">{name}</span></h1>
            <p className="user-msg">Félicitation! Vous avez explosé vos objectifs hier &#x1F44F;</p>
        </div>
    )
}

User.propTypes = {
   name: PropTypes.string.isRequired 
}
export default User;