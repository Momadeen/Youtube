import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Search from './Pages/Search';

const App = () => (
  <Router>
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="" element={<Navigate to="/search" />} />
    </Routes>
  </Router>
);

export default App;
