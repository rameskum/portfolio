import React from 'react';
import './styles/index.scss';

import { createRoot } from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<HelmetProvider>
		<App />
	</HelmetProvider>
);
