import React, {useState, useEffect} from "react";

// router
import { Link } from "react-router-dom";


// components
import ActivityGraph from "../components/ActivityGraph/ActivityGraph";
import Card from "../components/Card/Card";
import LineChartSession from "../components/LineChartSession/LineChartSession";
import NavBar from "../components/NavBar/NavBar";
import NavBarLeft from "../components/NavBarLeft/NavBarLeft";
import RadarChartActivity from "../components/RadarChartActivity/RadarChartActivity";
import RadialBarChartScore from "../components/RadialBarChartScore/RadialBarCharScore";
import User from "../components/User/User";

// img
import prot_icon from "../asset/protein-icon.svg"
import cal_icon from "../asset/calories-icon.svg"
import gluc_icon from "../asset/carbs-icon.svg"
import lip_icon from "../asset/fat-icon.svg"

// style
import "./dashboard.scss"




const Home = () => {

    return (
        <div className="dashboard">
            <NavBar />
            <div className="dashboard-main">
                <NavBarLeft />
                <div className="dashboard-main-user">
                    
                    <User />
                    <Link to="/user/12">User 12 &#x1F6B9; </Link>
                    <Link to="/user/18">User 18 &#x1F6BA;</Link>
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
                                num = ""
                                unit = "kcal"
                                cat="Calories"
                            />
                            <Card 
                                icon = {prot_icon}
                                num = ""
                                unit = "g"
                                cat="Proteines"
                            />
                            <Card 
                                icon = {gluc_icon}
                                num = ""
                                unit = "g"
                                cat="Glucides"
                            />
                            <Card 
                                icon = {lip_icon}
                                num = ""
                                unit = "g"
                                cat="Lipides"
                            />
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;