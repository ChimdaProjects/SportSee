
import ActivityGraph from "../components/ActivityGraph/ActivityGraph";
import LineChartSession from "../components/LineChartSession/LineChartSession";
import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";
import RadarChartActivity from "../components/RadarChartActivity/RadarChartActivity";
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
                    <div className="dashboard-main-content-graph">
                        <ActivityGraph />
                        <div>
                            <LineChartSession />
                            <RadarChartActivity />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard;