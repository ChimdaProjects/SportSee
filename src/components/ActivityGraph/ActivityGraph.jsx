import React from "react";

import PropTypes from 'prop-types';

// Recharts components
import {
    BarChart,
    Bar,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, 
    Label, 
    ResponsiveContainer
  } from "recharts";

// Style
import "./activityGraph.scss";



/**
 * This function displays the graph of daily sessions
 * @param {object} datas of daily activity 
 * @returns {JSX} Render the graph of the daily activity
 */
const ActivityGraph = ({data}) => {
  // array of sessions
   const datas = data;
   // loop to transform date by number
   for (let i = 0 ; i < datas.length ; i ++) {
        datas[i].day = i + 1 ;
    }
  
    return (
        <div className="graph-activity">
            <h2 className="graph-activity-title">Activité quotidienne</h2>
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart
                    data={data}
                    barGap={10} 
                    barCategoryGap="35%"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Label>
                        Activité quotidienne
                    </Label>
                    <XAxis 
                        dataKey="day" 
                        tickLine={false}
                        tickMargin={0}
                    /> 
                    <YAxis  
                        yAxisId="kg"
                        dataKey="kilogram" 
                        type="number" 
                        domain={["dataMin-1", "dataMax + 1"]}  
                        axisLine={false} 
                        orientation="right" 
                        tickLine={false}
                        tickMargin={20} 
                        tick={{fontSize: 14}}  
                    />
                    <YAxis  
                        yAxisId="cal"
                        dataKey="calories" 
                        type="number"  
                        domain={["dataMin - 50", "dataMax + 50"]}
                        hide={true}  
                    /> 
                    <Tooltip 
                        content={<CustomToolTip/>} 
                        active 
                        animationEasing="ease-out"
                    />
                    <Legend  
                        verticalAlign="top" 
                        wrapperStyle={{ lineHeight: "60px"}} 
                        align="right" 
                    />
                    
                    <Bar  
                        yAxisId="kg"
                        name="Poids (kg)"
                        dataKey="kilogram" 
                        fill="#282D30" 
                        barSize={8} 
                        maxBarSize={8}
                        legendType="circle" 
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar  
                        yAxisId="cal"
                        name="Calories brûlées (kCal)" 
                        dataKey="calories" 
                        fill="#E60000" 
                        barSize={8} 
                        maxBarSize={8}
                        legendType="circle" 
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityGraph.propTypes = {
    data : PropTypes.array.isRequired
}

const CustomToolTip = ({active, payload}) => {
    if (active && payload) {
        return (
            <div className="tooltip">
                <p className="tooltip-kg">{payload[0].value} kg</p>
                <p className="tooltip-kcal">{payload[1].value} kCal</p>
                
            </div>
            
        )
    }
  
}
CustomToolTip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}
export default ActivityGraph;