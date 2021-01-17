import React, { useEffect, useState } from 'react';
// import CardList from './/components/CardList/CardList';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

function App() {
	const [ state, setState ] = useState({
		podcasts: []
	});

	const getPodcasts = () => {
		axios.get('/podcasts').then((response) => {
			console.log('button clicked');
			console.log(response.data);
		});
	};

	useEffect(() => {
		async function loadData() {
			await axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((response) => setState({ podcasts: [ response.data ] }));
			console.log(state, 'state in useffect');
		}
		loadData();
	}, []);

	return (
		<div>
			<div className="App">
				<div className="app-main">
					<h1>TOP PODCASTS</h1>
					<Header podcasts={state.podcasts} />
					<button onClick={getPodcasts}>Get Podcasts</button>
				</div>
				{/* <CardList podcasts={state.podcasts} /> */}
			</div>
		</div>
	);
}

export default App;
