import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useFetch } from '../../services/api';
import { UserIdContext } from '../../utils/context';
import { useContext } from 'react';

function PerformanceChart() {
  const { userId } = useContext(UserIdContext);
  const { data: performance } = useFetch(userId, 'performance');

  const tickKind = (index) => {
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
        new Error('Wrong index of kind');
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
            data={performance.data.data}
          >
            <PolarGrid stroke="#FFFFFF" radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{
                fill: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '500',
              }}
              tickFormatter={tickKind}
            />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

export default PerformanceChart;
