import React, { useState } from 'react';

const Listen = (props) => {
	const [ podcasts, setPodcasts ] = useState([]);
	const [ categoryName, setCategoryName ] = useState('');

	const onClickChange = () => {
		let genreId = props.category;
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
			response.json().then(async (data) => {
				console.log('Listen 23 data', data.podcasts);
				const { description, title, website } = data.podcasts[0];
				console.log('destructuring', description, title, website);
				console.log('testing', data.podcasts[0]);
				setPodcasts([
					...podcasts,
					{
						value: data
					}
				]);
				setCategoryName('programming');
				console.log('statearray', podcasts);
				console.log('statecat', categoryName);
			});
		});
	};

	return (
		<div>
			<h1>"Testing"</h1>
			<button onClick={onClickChange}>Click</button>
		</div>
	);
};

export default Listen;
