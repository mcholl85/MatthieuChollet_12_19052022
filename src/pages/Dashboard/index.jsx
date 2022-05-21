import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import Header from '../../components/Header';
import ActivityChart from '../../components/ActivityChart';

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
      </main>
    )
  );
}

export default Dashboard;
