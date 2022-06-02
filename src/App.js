import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/user/12" />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
