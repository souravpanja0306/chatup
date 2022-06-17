import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Messenger from './pages/Messenger'
import BodyLayout from './components/BodyLayout';

const App = () => {
  return (
    <>
      <Router>
        <BodyLayout>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/messenger" exact element={<Messenger />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/registration" exact element={<Registration />} />
          </Routes>
          <Footer/>
        </BodyLayout>
      </Router>
    </>
  )
}

export default App