import "./lineChartSession.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import dataSession from "../../datas/data"
import CustomToolTipSession from "./CustomToolTipSession";

const LineChartSession = ({data}) => {
    //console.log(data)
    const newDatas = data.map((elt) => {
        //console.log("elt",elt)
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
    //console.log("data", newDatas)
    return (
        <div className="graph-session">
            <ResponsiveContainer width={"100%"} height={258}>
                <LineChart
                      width={500}
                      height={300}
                      data={newDatas}
                      strokeWidth={1}
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



export default LineChartSession;