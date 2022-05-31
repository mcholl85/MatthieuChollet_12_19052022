import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';

function AverageChart({ sessions }) {
  const tickDay = (day) => {
    if (isNaN(day)) {
      return Error('Not a number');
    } else if (day < 1 || day > 7) {
      return Error('Wrong number');
    } else {
      switch (day) {
        case 1:
          return 'L';
        case 2:
          return 'M';
        case 3:
          return 'M';
        case 4:
          return 'J';
        case 5:
          return 'V';
        case 6:
          return 'S';
        case 7:
          return 'D';
      }
    }
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="average__chart__tooltip">
          <p>{`${payload[0].value}`} min</p>
        </div>
      );
    }
    return null;
  };

  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];

    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  return (
    <div className="average">
      <h2 className="average__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer className="average__chart" width="92%" height="80%">
        <LineChart data={sessions}>
          <defs>
            <linearGradient id="colorLine">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4032} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickFormatter={tickDay}
            tick={{ fill: '#FFFFFF', opacity: '0.5' }}
            tickMargin={10}
          />
          <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url('#colorLine')"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: '#FFFFFF',
              stroke: '#FFFFFF',
              strokeOpacity: 0.1983,
              strokeWidth: 9,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageChart;
