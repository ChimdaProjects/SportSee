import "./lineChartSession.scss";
import PropTypes from 'prop-types';

/**
 * This function displays the tooltip from the line chart session graph
 * @param {Boolean} active - If set true, the tooltip is displayed. If set false, the tooltip is hidden
 * @param {Array} payload - The source data of the content to be displayed in the tooltip
 * @returns HTML
 */
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

CustomToolTipSession.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array.isRequired
}

export default CustomToolTipSession;