import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";
import User from "../components/User/User";

import "./dashboard.scss"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <NavBar />
            <div className="dashboard-main">
                <NavBarLeft />
                <div className="dashboard-main-content">
                    <User />
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard;