import "./radialBarScore.scss"
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts';
import PropTypes from 'prop-types';

/**
 * This function displays the score
 * @param {number} score - score of the user's objectif
 * @returns {JSX} Render the graph of the user's score
 */
const RadialBarChartScore = ({ score }) => {
    const data = [
        { value: score },
        { value: 1 - score },
    ]
    return (
        <div className="graph-score">
            <h3 className="graph-score-title">Score</h3>
            <ResponsiveContainer width={ "100%" } height={ 250 }>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={ data }
                        innerRadius={ 70 }
                        outerRadius={ 85 }
                        startAngle={ 90 }
                       
                    >
                    {
                    data.map((entry, index) => index === 0 ? 
                    (
                    <Cell key={`cell-${index}`} cornerRadius={ 10 } fill="#ff0000" />
                    ) : 
                    (
                    <Cell key={`cell-${entry}`} fill="#FFFFFF" />
                    )
                    )}
        
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="score">
                <p className="score-percent">{ score * 100 }%</p>
                <p className="score-text">de votre</p>
                <p className="score-text">objectif</p>
            </div>
        </div>
    )
}

RadialBarChartScore.propTypes = {
    score : PropTypes.number
}
export default RadialBarChartScore;