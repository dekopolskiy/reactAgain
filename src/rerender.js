import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './store';




export const rerenderTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App store={store} addPost={addPost} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };
  