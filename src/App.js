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

	const getApiData = (genreId) => {
		// let genreId = 67;
		console.log(genreId, 'genreId Listen');
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
						const response = await axios({
							method: 'post',
							url: '/findId',
							data: {
								id: id
							}
						})
							.then(function(response) {
								pod['rating'] = response.data.rating;
								pod['numberOfRatings'] = response.data.numberOfRatings || 'N/A';
								pod['itunes'] = response.data.itunes;
							})
							.catch(function(error) {
								console.log(error);
							});
					}
					const test = await setState({ podcasts: [ data.podcasts ] });
				};
				getRating();

				console.log(data.podcasts, 'data.podcasts');
			});
		});
	};

	// useEffect(
	// 	() => {
	// 		for (let pod of state.podcasts) {
	// 			const id = pod.id;
	// 			const response = axios({
	// 				method: 'post',
	// 				url: '/findId',
	// 				data: {
	// 					id: id
	// 				}
	// 			})
	// 				.then(function(response) {
	// 					pod['rating'] = response.data.rating;
	// 					pod['numberOfRatings'] = response.data.numberOfRatings || 'N/A';
	// 					pod['itunes'] = response.data.itunes;
	// 				})
	// 				.catch(function(error) {
	// 					console.log(error);
	// 				});
	// 		}
	// 		console.log(state.podcasts, 'state ran in useEffect');
	// 		console.log(state.podcasts, 'state ran in useEffect');
	// 	},
	// 	[ state ]
	// );

	// useEffect(
	// 	() => {
	// 		const test = axios({
	// 			method: 'post',
	// 			url: '/test',
	// 			data: { id: '4872ebcafa5d477d9ee835f633defa1c' }
	// 		}).then((response) => {
	// 			console.log(response.data, 'response.data');
	// 		});
	// 	},
	// 	[ state ]
	// );

	return (
		<PodcastProvider value="will">
			<div className="App">
				<div className="app-main">
					<Header podcasts={state.podcasts} getApiData={getApiData} />
				</div>
			</div>
		</PodcastProvider>
	);
}

export default App;
