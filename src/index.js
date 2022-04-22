import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore } from './store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

window.state = reduxStore;

reportWebVitals();
