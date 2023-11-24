import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Routes } from "generouted/react-router";
import { Routes } from './routes';
import { HelmetProvider } from 'react-helmet-async';

import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<Routes />
		</HelmetProvider>
	</React.StrictMode>
);
