import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import  Sidebar  from './Components/Content/Sidebar/Sidebar';
import { ContainerContent } from './Components/Content/ContainerContent';
import { ProfileContainer } from './Components/Content/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar/>
        <Routes>
          <Route path="/dialogs" element={<ContainerContent/>} />
          <Route path="/profile" element={<ProfileContainer/>} />
          <Route path="/users" element={<UsersContainer/>} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
