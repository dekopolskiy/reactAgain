import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { ContainerContent } from './Components/Content/ContainerContent';
import { ProfileContainer } from './Components/Content/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { Sidebar } from './Components/Content/Sidebar/Sidebar';
import { connect } from 'react-redux';
import LoginContainer from './Components/Login/LoginContainer';
import { authMeThunk } from './actions';

const App = ( props ) => {
  useEffect(() => {
    props.authMeThunk()
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className={props.online? 'online': 'offline'}>{props.online? 'online': 'offline'}</div>
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path="/dialogs" element={<ContainerContent />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>)
}
const mstp = (state) => {
  return {
    online : state.authMe.online,
  }
};
export default connect(mstp, { authMeThunk })(App);
//меняю url UserID но профиль один и тот же, поэтому необходимо после каждого обновления браузерной строки
//проверять на совпдаения с помощью withRouter match, и в соотвествии с этим рендрерить компоненту