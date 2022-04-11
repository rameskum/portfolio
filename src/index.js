import React from 'react';
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';

import {createRoot} from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

reportWebVitals();
