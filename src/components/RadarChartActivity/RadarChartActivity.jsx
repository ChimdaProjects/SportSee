import "./radarChartActivity.scss";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


const data = [
    {
        kind: "Cardio",
        value: 80
    },
    {
        kind: "Energy",
        value: 120
    },
    {
        kind: "Endurance",
        value: 140
    },
    {
        kind: "Strength",
        value: 50
    },
    {
        kind: "Speed",
        value: 200
    },
    {
        kind: "Intensity",
        value: 90
    }

]
const RadarChartActivity = () => {
   
    return (
        <div className="graph-radar-activity">
            <ResponsiveContainer width={"100%"} height={250}>
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={data}
   
                >   
                    <PolarGrid />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tick={{fontSize: 12, color: "#FFFFFF"}} 

                    />
                    <Radar  
                        dataKey="value"  
                        fill="#FF0101B2" 
                        fillOpacity={0.7} 
                    />
                </RadarChart>
      </ResponsiveContainer>
        </div>
    )
}

export default RadarChartActivity;