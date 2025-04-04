
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './context/AuthContext';
import KeycloakProvider from './context/KeycloakProvider';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <KeycloakProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard/*" element={<DashboardPage />} />
              </Route>
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </KeycloakProvider>
  );
}

export default App;