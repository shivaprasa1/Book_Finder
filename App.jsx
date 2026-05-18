import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import { auth } from './src/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={user ? <Home /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={!user ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
          path="/register" 
          element={!user ? <Register /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}
