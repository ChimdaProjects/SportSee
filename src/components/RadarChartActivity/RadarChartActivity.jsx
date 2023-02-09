import "./radarChartActivity.scss";
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * This function displays a radar.
 * @param {object} datas of the user's performances
 * @returns {JSX} Render the radar graph of user's activity
 */
const RadarChartActivity = ({dataPerf}) => {
   
    // new array datas, modification kind by a name
    const newDatas = dataPerf.map((elt)=> {
        switch(elt.kind) {
            case 1: 
            return {
                kind: "cardio",
                value: elt.value
            }
            case 2: 
            return {
                kind: "energy",
                value: elt.value
            }
            case 3: 
            return {
                kind: "endurance",
                value: elt.value
            }
            case 4: 
            return {
                kind: "strength",
                value: elt.value
            }
            case 5: 
            return {
                kind: "speed",
                value: elt.value
            }
            case 6: 
            return {
                kind: "intensity",
                value: elt.value
            }
            default: return {...dataPerf}
        }
   })
  
    return (
        <div className="graph-radar-activity">
            <ResponsiveContainer width={"100%"} height={250}>
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={newDatas}
   
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

RadarChartActivity.propTypes = {
    data : PropTypes.array
}
export default RadarChartActivity;