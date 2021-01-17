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
	};

	const getItunesData = () => {
		for (let pod of listenNotesPodcasts) {
      axios.get(`https://itunes.apple.com/lookup?id=${pod.itunes_id}`)
      .then(error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
    
        res.json(JSON.parse(body));
      };





			// axios
			// 	.post('/updatepodcast', {
			// 		id: '5fd59708ddf9aa082b90247c',
			// 		brand: 'Chery'
			// 	})
			// 	.then((response) => {
			// 		this.getCars();
			// 	});
		}
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
