
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import getKeycloakInstance from './config/KeycloakConfig';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import KeycloakProvider from './context/KeycloakProvider';

function App() {
  return (
    <KeycloakProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </KeycloakProvider>
  );
}

export default App;
