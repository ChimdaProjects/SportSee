import "./lineChartSession.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import PropTypes from 'prop-types';
import CustomToolTipSession from "./CustomToolTipSession";

/**
 * This function displays the graph of average sessions.
 * @param {array} data - Array of the average sessions of a user per day.
 * @returns {JSX} Render the graph for the average session
 */
const LineChartSession = ({data}) => {
    // modification array, change day by first letter of a day of a week
    const newDatas = data.map((elt) => {

        switch(elt.day) {
            case 1: 
            return { 
                day: "L",
                sessionLength : elt.sessionLength
                
            }
            case 2: 
            return {
                day: "M",  
                sessionLength : elt.sessionLength
            }
            case 3: 
            return { 
                day: "M", 
                sessionLength : elt.sessionLength 
            }
            case 4: 
            return {
                day: "J",  
                sessionLength : elt.sessionLength
            }
            case 5: 
            return { 
                day: "V", 
                sessionLength : elt.sessionLength 
            }
            case 6: 
            return { 
                day: "S",  
                sessionLength : elt.sessionLength
            }
            case 7: 
            return {
                day: "D", 
                sessionLength : elt.sessionLength 
            }
            default : return {...data}
        }
    })
   
    return (
        <div className="graph-session">
            <h2 className="graph-session-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width={"100%"} height={258}>
                <LineChart
                      data={newDatas}
                      strokeWidth={1}
                      outerRadius="75%"
                      margin={{ top: 10, right: 12, bottom: 24, left: 0 }}
                >
                        <XAxis 
                            dataKey="day" 
                            tickLine={true}
                            stroke="red"
                            padding={{left:14}}
                            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
                        />
                        <YAxis 
                            dataKey="sessionLength" 
                            domain={[0, "dataMax + 10"]}
                            hide={true}
                        />
                        <Tooltip 
                            content={<CustomToolTipSession/>}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                strokeWidth: 32,
                              }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


LineChartSession.propTypes = {
    data : PropTypes.array.isRequired
}


export default LineChartSession;