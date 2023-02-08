import React, {useState, useEffect} from "react";
import axios from "axios";
// router
import { useParams } from "react-router-dom";

// datas
import {  getUserActivity, getUserAverageSessions, getUserPerf } from "../services/callsDatasMocked";
import { getUserInfos } from "../services/apiCalls";
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
import "./dashboard.scss";


const Dashboard = () => {
    
    const [ dataUser, setDataUser ] = useState([]);
    const [ dataKey, setDataKey ] = useState([]);
    const [score, setScore] = useState([]);
    const [session, setSession] = useState([]);
    const [averageSession, setAverageSession] = useState([]);
    const [perf, setPerf] = useState([]);
    //console.log("data", dataUser);

    const { userId } = useParams();
    //console.log("user id", userId);

    useEffect(() => {
        const fetchDatas = async () => {
            const datas = await getUserInfos(parseInt(userId));
            console.log("datas",datas)
            setDataUser(datas.data.userInfos);
            setDataKey(datas.data.keyData);
            setScore(datas.data.todayScore || datas.score);
            
            const dataActivity = await getUserActivity(userId);
            setSession(dataActivity.sessions);
            
           const dataAverageSession = await getUserAverageSessions(userId);
           setAverageSession(dataAverageSession.sessions);
            
           const dataPerformance = await getUserPerf(userId);
           setPerf(dataPerformance.data);
        }
        fetchDatas();
    } , [userId]);
    
    //console.log("username",userInfos.firstName)
    //console.log("perf", perf)
    if (!dataUser) return null;
    
    return (      
            <div className="dashboard">
            <NavBar />
            <div className="dashboard-main">
                <NavBarLeft />
              
                <div className="dashboard-main-user">
                    
                   <User name ={dataUser.firstName}/>
                   {/* dataUser.userInfos.firstName */}
                
                    <div className="dashboard-main-content">
                        <div className="dashboard-main-content-graph">
                            <ActivityGraph data = {session}/>
                            <div className="dashboard-main-content-graph-details">
                                <LineChartSession data = {averageSession}/>
                                <RadarChartActivity dataPerf ={perf}/>
                                <RadialBarChartScore score = {score}/>
                            </div>   
                        </div>

                        <div className="dashboard-main-content-cards">
                            <Card 
                                icon = {cal_icon} 
                                num = {dataKey.calorieCount}
                                unit = "kcal"
                                cat="Calories"
                            />
                            <Card 
                                icon = {prot_icon}
                                num = {dataKey.proteinCount}
                                unit = "g"
                                cat="Proteines"
                            />
                            <Card 
                                icon = {gluc_icon}
                                num = {dataKey.carbohydrateCount }
                                unit = "g"
                                cat="Glucides"
                            />
                            <Card 
                                icon = {lip_icon}
                                num = {dataKey.lipidCount}
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

export default Dashboard;