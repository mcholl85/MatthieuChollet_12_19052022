import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import Header from '../../components/Header';
import ActivityChart from '../../components/ActivityChart';
import AverageChart from '../../components/AverageChart';
import PerformanceChart from '../../components/PerformanceChart';
import ScoreChart from '../../components/ScoreChart';
import CountChart from '../../components/CountChart';

function Dashboard() {
  const { id: userId } = useParams();
  const user = useFetch(userId, '');
  const activity = useFetch(userId, 'activity');
  const averageSessions = useFetch(userId, 'average-sessions');
  const performance = useFetch(userId, 'performance');

  return (
    !user.error &&
    !user.isLoading && (
      <main className="dashboard">
        <Header firstName={user.data.userInfos.firstName} />

        {!activity.error && !activity.isLoading && (
          <ActivityChart sessions={activity.data.sessions} />
        )}
        <div className="dashboard__charts-3">
          {!averageSessions.error && !averageSessions.isLoading && (
            <AverageChart sessions={averageSessions.data.sessions} />
          )}
          {!performance.error && !performance.isLoading && (
            <PerformanceChart data={performance.data} />
          )}
          <ScoreChart score={user.data.score || user.data.todayScore} />
        </div>
        <CountChart
          calorie={user.data.keyData.calorieCount}
          protein={user.data.keyData.proteinCount}
          carbohydrate={user.data.keyData.carbohydrateCount}
          lipid={user.data.keyData.lipidCount}
        />
      </main>
    )
  );
}

export default Dashboard;
