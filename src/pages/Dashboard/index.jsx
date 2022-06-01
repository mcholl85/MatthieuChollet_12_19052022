import { useParams } from 'react-router-dom';
import { useFetch } from '../../services/api';
import Header from '../../components/Header';
import ActivityChart from '../../components/ActivityChart';
import AverageChart from '../../components/AverageChart';
import PerformanceChart from '../../components/PerformanceChart';
import ScoreChart from '../../components/ScoreChart';
import CountChart from '../../components/CountChart';
import {
  USER_DATA,
  PERFORMANCE_DATA,
  AVERAGE_DATA,
  ACTIVITY_DATA,
} from '../../services/mock/data';

const USE_MOCKDATA = false;

function Dashboard() {
  const { id: userId } = useParams();
  let { data: user, error: userError } = useFetch(userId, '');
  let { data: activity } = useFetch(userId, 'activity');
  let { data: averageSessions } = useFetch(userId, 'average-sessions');
  let { data: performance } = useFetch(userId, 'performance');

  if (USE_MOCKDATA) {
    user = USER_DATA;
    activity = ACTIVITY_DATA;
    averageSessions = AVERAGE_DATA;
    performance = PERFORMANCE_DATA;
  }

  if (user === 'can not get user') {
    return (
      <main className="dashboard">
        <h1>UserID not found</h1>
      </main>
    );
  }

  if (userError) {
    return (
      <main className="dashboad">
        <h1>API not found</h1>
      </main>
    );
  }

  return (
    user && (
      <main className="dashboard">
        <Header firstName={user.data.userInfos.firstName} />
        <section className="dashboard__charts">
          {activity && <ActivityChart sessions={activity.data.sessions} />}
          <div className="dashboard__charts__3">
            {averageSessions && (
              <AverageChart sessions={averageSessions.data.sessions} />
            )}
            {performance && <PerformanceChart data={performance.data} />}
            <ScoreChart score={user.data.score || user.data.todayScore} />
          </div>
        </section>
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
