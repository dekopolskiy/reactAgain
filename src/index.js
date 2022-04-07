import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore, store } from './store';
import reportWebVitals from './reportWebVitals';



export const rerenderTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={reduxStore.getState()} dispatch={reduxStore.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderTree(store);
reduxStore.subscribe(() => rerenderTree(reduxStore.getState()));


reportWebVitals();
