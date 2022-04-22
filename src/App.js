import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { ContainerContent } from './Components/Content/ContainerContent';
import { ProfileContainer } from './Components/Content/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { Sidebar } from './Components/Content/Sidebar/Sidebar';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthMe } from './actions';


const App = (props) => {
  const {authMe : { id: online }} = props;
  useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,//cookie не посылается автоматически если стоит CORS, поэтому TRUE
    })
    .then(({ data }) => data.resultCode === 0? props.setAuthMe(data.data) : null); 
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className={online? 'online': 'offline'}>{online? 'online': 'offline'}</div>
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path="/dialogs" element={<ContainerContent />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>)
}
const mstp = (state) => {
  return {
    authMe : state.authMe,
  }
};
export default connect(mstp, { setAuthMe })(App);
//меняю url UserID но профиль один и тот же, поэтому необходимо после каждого обновления браузерной строки
//проверять на совпдаения с помощью withRouter match, и в соотвествии с этим рендрерить компоненту