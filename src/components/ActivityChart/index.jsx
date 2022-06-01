import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';

function ActivityChart({ sessions }) {
  const tickDate = (tickItem) => new Date(tickItem).getDate();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="activity__chart__tooltip">
          <p>{`${payload[0].value}`}kg</p>
          <p>{`${payload[1].value}`}Kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="activity">
      <h2 className="activity__title">Activité quotidienne</h2>
      <ResponsiveContainer className="activity__chart" width="92%" height="90%">
        <BarChart barGap={8} data={sessions}>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC' }}
            tickFormatter={tickDate}
            tickMargin="16"
          />
          <YAxis
            yAxisId="right"
            dataKey="kilogram"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC' }}
            domain={['dataMin-1', 'dataMax+2']}
          />
          <YAxis
            yAxisId="left"
            dataKey="calories"
            orientation="left"
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ marginTop: '-40px', paddingRight: '20px' }}
            verticalAlign="top"
            align="right"
            iconSize={8}
            payload={[
              {
                value: 'Poids (kg)',
                type: 'circle',
                id: 'ID01',
                color: '#282D30',
              },
              {
                value: 'Calories brûlées (kCal)',
                type: 'circle',
                id: 'ID02',
                color: '#E60000',
              },
            ]}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object),
};

export default ActivityChart;
