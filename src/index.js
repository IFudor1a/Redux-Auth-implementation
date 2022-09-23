import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import {createStore} from "redux";
import reducer from './Reducers';
import {Provider} from 'react-redux';
import middleware from './Middlewares';
import {BrowserRouter} from "react-router-dom";

const Store = createStore(reducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <BrowserRouter>
    <App />
        </BrowserRouter>
    </Provider>
);
