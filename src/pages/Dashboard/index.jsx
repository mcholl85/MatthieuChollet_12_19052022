import { useParams } from 'react-router-dom';

function Dashboard() {
  const { id } = useParams();

  return <h1>{id}</h1>;
}

export default Dashboard;
