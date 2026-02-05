
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import CalendarPage from './pages/Calendar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import AdminPanel from './pages/AdminPanel';

const AuthGuard = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Layout>{children}</Layout>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* User Routes */}
        <Route path="/" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/analysis" element={<AuthGuard><Analysis /></AuthGuard>} />
        <Route path="/calendar" element={<AuthGuard><CalendarPage /></AuthGuard>} />
        <Route path="/reports" element={<AuthGuard><Reports /></AuthGuard>} />
        <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AuthGuard><AdminPanel /></AuthGuard>} />
        <Route path="/admin/user/:uid/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/admin/user/:uid/calendar" element={<AuthGuard><CalendarPage /></AuthGuard>} />
        <Route path="/admin/user/:uid/analysis" element={<AuthGuard><Analysis /></AuthGuard>} />
        <Route path="/admin/user/:uid/reports" element={<AuthGuard><Reports /></AuthGuard>} />
        <Route path="/admin/user/:uid/profile" element={<AuthGuard><Profile /></AuthGuard>} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
