import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/projects" element={<Project />}/>
        </Routes>
    </BrowserRouter>
  )
}
