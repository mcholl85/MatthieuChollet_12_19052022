import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useContext } from 'react';
import useFetch from '../../services/api';
import UserContext from '../../utils/context';

function PerformanceChart() {
  const { userId } = useContext(UserContext);
  const { data: performance } = useFetch(userId, 'performance');
  const getPerformanceData = (data) => data.data.data;

  const getFrenchKind = (index) => {
    switch (index) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Energie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';
      default:
        return Error('Wrong index of kind');
    }
  };

  return (
    performance && (
      <div className="performance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="60%"
            data={getPerformanceData(performance)}
          >
            <PolarGrid stroke="#FFFFFF" radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{
                fill: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '500',
              }}
              tickFormatter={getFrenchKind}
            />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default PerformanceChart;
