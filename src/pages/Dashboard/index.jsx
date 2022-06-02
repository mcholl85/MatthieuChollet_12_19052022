import { useParams } from 'react-router-dom';
import { useFetch } from '../../services/api';
import Header from '../../components/Header';
import ActivityChart from '../../components/ActivityChart';
import AverageChart from '../../components/AverageChart';
import PerformanceChart from '../../components/PerformanceChart';
import ScoreChart from '../../components/ScoreChart';
import CountChart from '../../components/CountChart';
import { UserIdContext } from '../../utils/context';
import {
  USER_DATA,
  PERFORMANCE_DATA,
  AVERAGE_DATA,
  ACTIVITY_DATA,
} from '../../services/mock/data';

function Dashboard() {
  const { id: userId } = useParams();

  let { data: user, error: userError } = useFetch(userId, '');

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
        <UserIdContext.Provider value={{ userId }}>
          <Header firstName={user.data.userInfos.firstName} />
          <section className="dashboard__charts">
            <ActivityChart />
            <div className="dashboard__charts__3">
              <AverageChart />
              <PerformanceChart />
              <ScoreChart score={user.data.score || user.data.todayScore} />
            </div>
          </section>
          <CountChart
            calorie={user.data.keyData.calorieCount}
            protein={user.data.keyData.proteinCount}
            carbohydrate={user.data.keyData.carbohydrateCount}
            lipid={user.data.keyData.lipidCount}
          />
        </UserIdContext.Provider>
      </main>
    )
  );
}

export default Dashboard;
