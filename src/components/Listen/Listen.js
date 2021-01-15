import React, { useState, useEffect } from 'react';

import CardList from '../CardList/CardList';
import podcastArray from '../../podcast-array.js';
import './Listen.css';

const Listen = (props) => {
	console.log(props, 'props in Listen');

	const [ podcasts, setPodcasts ] = useState([]);
	const [ categoryName, setCategoryName ] = useState('');

	const onClickChange = () => {
		// let genreId = props.category;
		// console.log(genreId, 'genreId Listen');
		// let page = 1;
		// fetch(
		// 	'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=' +
		// 		genreId +
		// 		'&page=' +
		// 		page +
		// 		'&region=us&safe_mode=0',
		// 	{
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY
		// 		},
		// 		credentials: 'same-origin'
		// 	}
		// ).then((response) => {
		// 	response.json().then(async (data) => {
		// 		setPodcasts([
		// 			{
		// 				value: data
		// 			}
		// 		]);
		// 		setCategoryName('programming');
		// 		console.log('statearray', podcasts);
		// 		console.log('statecat', categoryName);
		// 	});
		// });
		let test = podcastArray[0];

		console.log(test, 'test');
		setPodcasts(test);
		// setCategoryName(props.category);
	};
	useEffect(
		(prevProps) => {
			let test = podcastArray[0];
			let test2 = podcastArray[1];
			let test3 = podcastArray[2];
			setPodcasts(test2);

			console.log(categoryName, 'categoryName');
			setCategoryName(props.category);
		},
		[ props.category ]
	);

	return (
		<div className="listen-container">
			{/* <h1>"Testing" - {categoryName}</h1> */}
			<button onClick={onClickChange}>Click</button>
			<CardList podcasts={podcasts} />
		</div>
	);
};

export default Listen;
