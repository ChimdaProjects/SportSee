import "./radialBarScore.scss"
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts';

const RadialBarChartScore = ({score}) => {
    const data = [
        { value: score },
        { value: 1 - score },
    ]
    return (
        <div className="graph-score">
            <h3 className="graph-score-title">Score</h3>
            <ResponsiveContainer width={"100%"} height={250}>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={data}
                        innerRadius={70}
                        outerRadius={85}
                        startAngle={90}
                    >
                    {
                    data.map((entry, index) => index === 0 ? 
                    (
                    <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                    ) : 
                    (
                    <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                    )
            )}
                        {/*<Cell cornerRadius={8} fill="#ff0000" />*/}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="score">
                <p className="score-percent">{score * 100}%</p>
                <p className="score-text">de votre</p>
                <p className="score-text">objectif</p>
            </div>
        </div>
    )
}

export default RadialBarChartScore;