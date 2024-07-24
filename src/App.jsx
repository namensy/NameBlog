import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';
import Details from './components/Details';
import Navbar from './components/Navbar';

function App() {
  const RoutesConfig = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/redirect" element={<Navigate to="/" />} />
      <Route path="/info" element={<Navigate to="/about" />} />
      <Route path='/Blogs/:id' element={<Details />}/>
    </Routes>
  );

  return (
    <BrowserRouter >
      <Navbar />
      <RoutesConfig />
    </BrowserRouter>
  )
}

export default App
