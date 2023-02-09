import "./card.scss";
import PropTypes from 'prop-types';

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