import React, { useEffect, useState } from 'react';
// import CardList from './/components/CardList/CardList';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import listenNotesPodcasts from './listennotes-array';

function App() {
	const [ state, setState ] = useState({
		podcasts: []
	});

	const getPodcasts = () => {
		axios.get('/podcasts').then((response) => {
			console.log('button clicked');
			setState({ podcasts: [ response.data ] });
			console.log(response.data);
		});
	};

	const getTopTwenty = () => {
		axios.get('/topTwenty').then((response) => {
			console.log('button clicked');
			setState({ podcasts: [ response.data ] });
			console.log(response.data);
		});
	};

	const getListenNotes = () => {
		console.log(listenNotesPodcasts, 'listennotesarray');
		setState({ podcasts: [ listenNotesPodcasts ] });
	};

	// useEffect(() => {
	// 	async function loadData() {
	// 		await axios.get('/topTwenty').then((response) => setState({ podcasts: [ response.data ] }));
	// 		console.log(state, 'state in useffect');
	// 	}
	// 	loadData();
	// }, []);

	return (
		<div>
			<div className="App">
				<div className="app-main">
					<h1>TOP PODCASTS</h1>
					<button onClick={getPodcasts}>Get Podcasts</button>
					<button onClick={getTopTwenty}>Get Top Twenty</button>
					<button onClick={getListenNotes}>Get Listen Notes</button>
					<Header podcasts={state.podcasts} />
				</div>
				{/* <CardList podcasts={state.podcasts} /> */}
			</div>
		</div>
	);
}

export default App;
