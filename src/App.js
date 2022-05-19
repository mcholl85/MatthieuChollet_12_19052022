import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
