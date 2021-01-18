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

		for (let pod of listenNotesPodcasts) {
			axios
				.post('/addpodcast', {
					title: pod.title,
					image: pod.image,
					rating: '',
					numberOfRatings: '',
					genre: '',
					description: pod.description,
					website: pod.website,
					itunes: '',
					categoryid: '',
					itunesid: pod.itunes_id,
					listennotesurl: pod.listennotes_url
				})
				.then((response) => {
					console.log(response.data);
				});
		}
		getItunesData();
	};

	const getItunesData = async () => {
		const iTunesUrlArray = [];
		for (let pod of listenNotesPodcasts) {
			try {
				const response = await axios.get(`https://itunes.apple.com/lookup?id=${pod.itunes_id}`);
				iTunesUrlArray.push(response.data.results[0].trackViewUrl);
			} catch (error) {
				iTunesUrlArray.push('https://podcasts.apple.com');
			}
		}

		console.log('iTunesUrlArray', iTunesUrlArray);
		axios.post('/itunesdb', { urls: iTunesUrlArray }).then(function(response) {
			console.log(response.data);
		});
	};

	return (
		<div>
			<div className="App">
				<div className="app-main">
					<h1>TOP PODCASTS</h1>
					<button onClick={getPodcasts}>Get Podcasts</button>
					<button onClick={getTopTwenty}>Get Top Twenty</button>
					<button onClick={getListenNotes}>Get Listen Notes</button>
					<button onClick={getItunesData}>Get Itunes Data</button>
					<Header podcasts={state.podcasts} />
				</div>
				{/* <CardList podcasts={state.podcasts} /> */}
			</div>
		</div>
	);
}

export default App;
