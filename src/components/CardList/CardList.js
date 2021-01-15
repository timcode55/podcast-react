import React, { useState, useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import podcastArray from '../../podcast-array.js';

// const CardList = ({ podcasts }) => {
const CardList = (props) => {
	console.log('props in CardList', props.children);
	const [ podcasts, setPodcasts ] = useState([]);
	const [ categoryName, setCategoryName ] = useState('');

	useEffect(
		() => {
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
		<div className="card-list-container">
			{/* {podcasts[0] && podcasts[0].value.podcasts[0].title} */}
			{podcasts[0] && (
				<div classname="card-container">
					{podcasts.map((item) => {
						// return item.value.podcasts[0].title;
						return <Card key={item.id} item={item} />;
					})}
				</div>
			)}
			{/* <p> */}
			{/* <Card item={props.podcasts} name={'John'} /> */}
			{/* </p> */}
		</div>
	);
};

export default CardList;
