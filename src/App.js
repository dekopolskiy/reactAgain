import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Content } from './Components/Content/Content';
import { Profile } from './Components/Content/Profile/Profile';

const App = () => {
  return (
    <div className="App">
        <Header />
        <div className='main'>
        <Routes>
          <Route path="/dialogs" element={<Content />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
      <Footer />
    </div>

  );
}

export default App;
