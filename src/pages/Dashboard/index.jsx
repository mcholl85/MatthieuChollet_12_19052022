import { useParams } from 'react-router-dom';
import useFetch from '../../services/api';
import Header from '../../components/Header/index.jsx';
import ActivityChart from '../../components/ActivityChart/index.jsx';
import AverageChart from '../../components/AverageChart/index.jsx';
import PerformanceChart from '../../components/PerformanceChart/index.jsx';
import ScoreChart from '../../components/ScoreChart/index.jsx';
import CountChart from '../../components/CountChart/index.jsx';
import UserContext from '../../utils/context';

function Dashboard() {
  const { id: userId } = useParams();
  const { data: userData, error: userError } = useFetch(userId, '');

  if (userData === 'can not get user') {
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
    userData && (
      <UserContext.Provider value={{ userId, userData }}>
        <main className="dashboard">
          <Header />
          <section className="dashboard__charts">
            <ActivityChart />
            <div className="dashboard__charts__3">
              <AverageChart />
              <PerformanceChart />
              <ScoreChart />
            </div>
          </section>
          <CountChart />
        </main>
      </UserContext.Provider>
    )
  );
}

export default Dashboard;
