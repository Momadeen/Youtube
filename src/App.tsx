import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Search from './Pages/Search';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="" element={<Navigate to="/search" />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
