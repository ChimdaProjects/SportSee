import "./card.scss";
import PropTypes from 'prop-types';

/**
 * This function displays a card with some information from key data.
 * @param {string} icon : corresponding the path of the icon
 * @param {string} num : count 
 * @param {string} unit : corresponding to the unit used
 * @param {string} cat : corresponding to the category of the keydata
 * @returns {JSX} Render a card with differents informations
 */
const Card = ( {icon, num, unit, cat}) => {
    return (
        <div className="card">
            <img src={icon} alt="icon of card" className="card-icon"/>
            <div className="card-infos">
                <p className="card-infos-number">
                    {num}{unit}
                </p>
                <p className="card-infos-text">{cat}</p>
            </div>
        </div>

    )
}

Card.prototype = {
    icon: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    cat : PropTypes.string.isRequired
}
export default Card;