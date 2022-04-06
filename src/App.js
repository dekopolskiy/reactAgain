import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Content } from './Components/Content/Content';
import { Profile } from './Components/Content/Profile/Profile';
import { Sidebar } from './Components/Content/Sidebar/Sidebar';

const App = (props) => {//props.state
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar state={props.state} />
        <Routes>
          <Route path="/dialogs" element={<Content state={props.state} />} />
          <Route path="/profile" element={<Profile state={props.state} dispatch={props.dispatch}/>} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
