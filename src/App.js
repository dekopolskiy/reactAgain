import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Content } from './Components/Content/Content';
import { Profile } from './Components/Content/Profile/Profile';
import { Sidebar } from './Components/Content/Sidebar/Sidebar';
import { ContainerContent } from './Components/Content/ContainerContent';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar state={props.state} />
        <Routes>
          <Route path="/dialogs" element={<ContainerContent dialogs={props.state.dialogs} dispatch={props.dispatch} />} />
          <Route path="/profile" element={<Profile profile={props.state.profile} dispatch={props.dispatch} />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
