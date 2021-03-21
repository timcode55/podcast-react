import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PodcastProvider } from './context/PodcastContext';

ReactDOM.render(
	<PodcastProvider value="will">
		<App />
	</PodcastProvider>,
	document.getElementById('root')
);
