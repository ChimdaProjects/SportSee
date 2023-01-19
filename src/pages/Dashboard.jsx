
import ActivityGraph from "../components/ActivityGraph/ActivityGraph";
import Card from "../components/Card/Card";
import LineChartSession from "../components/LineChartSession/LineChartSession";
import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";
import RadarChartActivity from "../components/RadarChartActivity/RadarChartActivity";
import RadialBarChartScore from "../components/RadialBarChartScore/RadialBarCharScore";
import User from "../components/User/User";
import prot_icon from "../asset/protein-icon.svg"
import cal_icon from "../asset/calories-icon.svg"
import gluc_icon from "../asset/carbs-icon.svg"
import lip_icon from "../asset/fat-icon.svg"

import "./dashboard.scss"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <NavBar />
            <div className="dashboard-main">
                <NavBarLeft />
                <div className="dashboard-main-user">
                    <User />
                    <div className="dashboard-main-content">
                        <div className="dashboard-main-content-graph">
                            <ActivityGraph />
                            <div className="dashboard-main-content-graph-details">
                                <LineChartSession />
                                <RadarChartActivity />
                                <RadialBarChartScore />
                            </div>   
                        </div>

                        <div className="dashboard-main-content-cards">
                            <Card 
                                icon = {cal_icon} 
                            />
                            <Card 
                                icon = {prot_icon}
                            />
                            <Card 
                                icon = {gluc_icon}
                            />
                            <Card 
                                icon = {lip_icon}
                            />
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard;