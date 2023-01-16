import "./radarChartActivity.scss";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
    {
        kind: "cardio",
        value: 80
    },
    {
        kind: "energy",
        value: 120
    },
    {
        kind: "endurance",
        value: 140
    },
    {
        kind: "strength",
        value: 50
    },
    {
        kind: "speed",
        value: 200
    },
    {
        kind: "intensity",
        value: 90
    }

]
const RadarChartActivity = () => {
   
    return (
        <div className="graph-radar-activity">
            <ResponsiveContainer width={"100%"} height={258}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
      </ResponsiveContainer>
        </div>
    )
}

export default RadarChartActivity;