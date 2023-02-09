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
    Label
  } from "recharts";

// Style
import "./activityGraph.scss";



/**
 * 
 * @param {object} props
 * @returns {JSX}
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
            <BarChart
                width={800}
                height={300}
                data={data}
                barGap={8} barCategoryGap={1}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <Label>
                Activité quotidienne
            </Label>
            <XAxis dataKey="day" dy={15}/> 
            <YAxis  dataKey="kilogram" type="number" domain={['dataMin-1', 'dataMax + 1']}  axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}  />
            <YAxis  dataKey="calories" type="number"  domain={['dataMin-20', "dataMax + 10"]}
            hide={true}  />
            <Tooltip content={<CustomToolTip/>}/>
            <Legend  verticalAlign="top" wrapperStyle={{ lineHeight: "40px"}} align="right" />
            <ReferenceLine y={0} stroke="#000" />
            <Bar  name="Poids (kg)"dataKey="kilogram" fill="#282D30" barSize={7} maxBarSize={8} legendType="circle" radius={[50, 50, 0, 0]}/>
            <Bar  name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={7} maxBarSize={8} legendType="circle" radius={[50, 50, 0, 0]}/>
            </BarChart>
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