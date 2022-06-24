import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Discover from './pages/discover';
import PrivateChat from './pages/private-chat';
import Messages from './pages/messages';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/discover' element={<Discover/>} Redirect={<Discover/>}/>
        <Route path='/private-chat' element={<PrivateChat/>} Redirect={<PrivateChat/>}/>
        <Route path='/messages' element={<Messages/>} Redirect={<Messages/>}/>
        <Route path='/sign-up' element={<SignUp/>} Redirect={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
