import "./lineChartSession.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import dataSession from "../../datas/data"
import CustomToolTipSession from "./CustomToolTipSession";

const LineChartSession = () => {
    const data = dataSession.USER_AVERAGE_SESSIONS[0].sessions;
    console.log("data", data)
    return (
        <div className="graph-session">
            <ResponsiveContainer width={"100%"} height={258}>
                <LineChart
                      width={500}
                      height={300}
                      data={data}
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