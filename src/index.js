import React from 'react';
import './styles/index.scss';

import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import * as ReactDOM from "react-dom";

const container = document.getElementById('root');

ReactDOM.render(
	<HelmetProvider>
		<App />
	</HelmetProvider>,
	container
);
