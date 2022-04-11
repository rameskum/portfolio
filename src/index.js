import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';
import Home from "./pages/home";

ReactDOM.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
