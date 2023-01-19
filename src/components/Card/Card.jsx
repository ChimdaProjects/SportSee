import "./card.scss";

const Card = ( {icon}) => {
    return (
        <div className="card">
            <img src={icon} alt="icon of card" className="card-icon"/>
            <div className="card-infos">
                <p className="card-infos-number">
                    1,930Kcal
                </p>
                <p className="card-infos-text">Calories</p>
            </div>
        </div>

    )
}

export default Card;