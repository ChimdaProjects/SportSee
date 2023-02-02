import "./user.scss"

const User = ({name}) => {

    return (
        <div className="user">
            <h1 className="user-title">Bonjour <span className="user-name">{name}</span></h1>
            <p className="user-msg">Félicitation! Vous avez explosé vos objectifs hier &#x1F44F;</p>
        </div>
    )
}

export default User;