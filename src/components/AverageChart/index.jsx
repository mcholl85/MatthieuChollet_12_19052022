import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../services/api';
import UserContext from '../../utils/context';

/**
 * Component for showing Average sessions's chart.
 * @component
 */

function AverageChart() {
  const { userId } = useContext(UserContext);
  const { data: averageSessions } = useFetch(userId, 'average-sessions');
  const getAverageSessionsData = (data) => data.data.sessions;

  /**
   * Function to get the first Letter of a day
   * @function
   * @param {number} day - Day of the week 1~7
   */
  const getFirstLetterOfDay = (day) => {
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
      default:
        return Error('Wrong number');
    }
  };
  /**
   * function for custom tooltip
   * @function
   * @param {boolean} active - If set true, the tooltip is displayed. If set false, is hidden.
   * @param {array} payload -The source data of the content to be displayed in the tooltip.
   * @return React element with the weight & the number of calories
   */
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

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  /**
   * function for custom cursor to the tooltip
   * @function
   * @param {Object} props - the option is the configuration of cursor.
   * @returns React element Rectangle
   */
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

  CustomCursor.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return (
    averageSessions && (
      <div className="average">
        <h2 className="average__title">Durée moyenne des sessions</h2>
        <ResponsiveContainer
          className="average__chart"
          width="92%"
          height="80%"
        >
          <LineChart data={getAverageSessionsData(averageSessions)}>
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
              tickFormatter={getFirstLetterOfDay}
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
    )
  );
}

export default AverageChart;
