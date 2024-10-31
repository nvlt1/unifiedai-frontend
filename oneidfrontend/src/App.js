// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Button from './components/Button/Button';
// import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import CreateIDPage from './pages/CreateIDPage';
import CreateIDPage2 from './pages/CreateIDPage2';
import VerifiedIDPage from './pages/VerifiedIDPage';
import SystemInProgressPage from './pages/SystemInProgressPage';
import Error404Page from './pages/Error404Page';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import VerificationPage from './pages/VerificationPage';
import ShareIdentityPage from './pages/ShareIdentityPage';
import LoginPage from './pages/LoginPage';
import VerifyIdentityPage from './pages/VerifyIdentityPage';
import OneTimePasscodePage from './pages/OneTimePasscodePage';
import OneIDVerifiedPage from './pages/OneIDVerifiedPage';
import OneIDUnverifiedPage from './pages/OneIDUnverifiedPage';


function App (){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-id" element={<CreateIDPage />} />
        <Route path="/create-id-2" element={<CreateIDPage2 />} />
        <Route path="/verified-id" element={<VerifiedIDPage />} />
        <Route path="/system-in-progress" element={<SystemInProgressPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-identity" element={<VerifyIdentityPage />} /> 
        <Route path="/otp" element={<OneTimePasscodePage />} />
        <Route path="/oneid-verified" element={<OneIDVerifiedPage />} />
        <Route path="/oneid-unverified" element={<OneIDUnverifiedPage />} />       
        <Route path="*" element={<Error404Page />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/share-identity" element={<ShareIdentityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
