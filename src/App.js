import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Content } from './Components/Content/Content';
import { Profile } from './Components/Content/Profile/Profile';
import { Sidebar } from './Components/Content/Sidebar/Sidebar';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar store={props.store}/>
        <Routes>
          <Route path="/dialogs" element={<Content store={props.store}/>} />
          <Route path="/profile" element={<Profile  store={props.store} addPost={props.addPost}/> }/>
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
