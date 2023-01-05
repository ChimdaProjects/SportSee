import "./navBarLeft.scss"

//img
import iconYoga from "../../asset/icon_yoga.svg"
import iconSwimming from "../../asset/icon_swimming.svg"
import iconCycling from "../../asset/icon_cycling.svg"
import iconFitness from "../../asset/icon_fitness.svg"


const NavBarLeft = () => {
    return (
        <div className="navBarLeft">
            <div className="navBarLeft-icons">
                <img src= {iconYoga} alt="icon of sport" className="icon"/>
                <img src= {iconSwimming} alt="icon of sport" className="icon"/>
                <img src= {iconCycling} alt="icon of sport" className="icon"/>
                <img src= {iconFitness} alt="icon of sport" className="icon"/>
            </div>
            <div className="navBarLeft-footer">Copyright, SportSee 2023</div>
        </div>
    )
}

export default NavBarLeft;