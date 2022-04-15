import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { VictoryPie } from "victory";

function GenrePieChart(props) {
    const { data } = props;


    return (
        <VictoryPie
            colorScale="heatmap"
            data={Array.from(data)}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        />
    );
}

export default GenrePieChart;