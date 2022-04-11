import React from 'react';
import './styles/index.scss'
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";

import {createRoot} from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Home/>);

reportWebVitals();
