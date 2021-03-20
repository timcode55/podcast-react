import React, { useState, useEffect } from 'react';
// import CardList from './/components/CardList/CardList';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import listenNotesPodcasts from './listennotes-array';
import { PodcastProvider } from './context/PodcastContext';
import { PodcastContext } from './context/PodcastContext';

function App() {
	const [ state, setState ] = useState({
		podcasts: []
	});

	useEffect(() => {
		getApiData(67);
	}, []);
	const getApiData = (genreId) => {
		// console.log(genreId, 'genreId Listen');
		let page = 1;
		fetch(
			'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=' +
				genreId +
				'&page=' +
				page +
				'&region=us&safe_mode=0',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY
				},
				credentials: 'same-origin'
			}
		).then((response) => {
			response.json().then((data) => {
				console.log(data, 'main data from listen notes');
				const getRating = async () => {
					for (let pod of data.podcasts) {
						const id = pod.id;
						const response = await axios
							.post(`/findId/?data=${id}`)
							.then(function(response) {
								pod['rating'] = response.data.rating;
								pod['numberOfRatings'] = response.data.numberOfRatings || 'N/A';
								pod['itunes'] = response.data.itunes;
							})
							.catch(function(error) {
								console.log(error);
							});
					}
					const podState = await setState({ podcasts: [ data.podcasts ] });
				};
				getRating();

				console.log(data.podcasts, 'data.podcasts');
			});
		});
	};

	return (
		<PodcastProvider value="will">
			<Header podcasts={state.podcasts} getApiData={getApiData} />
		</PodcastProvider>
	);
}

export default App;
