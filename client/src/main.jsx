import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'

// pages + components
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Membership from './pages/Membership'
import MembershipSuccess from './pages/MembershipSuccess'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/membership" element={<Membership/>} />
      <Route path="/membership/success" element={<MembershipSuccess/>} />
    </Routes>
  </BrowserRouter>
);

export default App;

// NOTE: no export here
createRoot(document.getElementById('root')).render(<App />)
