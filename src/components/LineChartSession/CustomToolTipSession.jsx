import "./lineChartSession.scss";

const CustomToolTipSession = ( { active, payload } ) => 
    {

        if (active && payload) {
            console.log("payload", payload)
        return (
            <div className="tooltip-session">
                <p className="tooltip-session-text">{ payload[0].value } min</p>  
            </div>
        )
        }
        return null;
    }

export default CustomToolTipSession;