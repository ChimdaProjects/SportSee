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
                kind: "Cardio",
                value: elt.value
            }
            case 2: 
            return {
                kind: "Energie",
                value: elt.value
            }
            case 3: 
            return {
                kind: "Endurance",
                value: elt.value
            }
            case 4: 
            return {
                kind: "Force",
                value: elt.value
            }
            case 5: 
            return {
                kind: "Vitesse",
                value: elt.value
            }
            case 6: 
            return {
                kind: "Intensité",
                value: elt.value
            }
            default: return {...dataPerf}
        }
   })
   // new array from newDatas to change the order of kind
   const orderedKind = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
   const orderedDatasArray = [];
   for (let kind of orderedKind) {
        for (let elt of newDatas) {
            if (elt.kind === kind) {
                orderedDatasArray.push({
                    kind : kind,
                    value : elt.value
                })
            }
        }
   }

    return (
        <div className="graph-radar-activity">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={orderedDatasArray}
   
                >   
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        stroke="white"
                        tick={{fontSize: 12, color: "#FFFFFF"}} 

                    />
                    <Radar  
                        dataKey="value"  
                        fill="#FF0101B2" 
                        fillOpacity={0.7} 
                        stroke="transparent"
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