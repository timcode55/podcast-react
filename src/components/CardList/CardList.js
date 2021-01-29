import React, { useContext, useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { PodcastContext } from '../../context/PodcastContext';

const CardList = (props) => {
	const [ podcasts, setPodcasts ] = useContext(PodcastContext);
	useEffect(() => {
		setPodcasts({ name: 'Testing adding this', price: '$50', id: 25336 });
	}, []);

	console.log(props, 'props ion cardlist');
	return (
		<div className="CardList">
			{props.podcasts.podcasts[0] ? (
				props.podcasts.podcasts[0].map((pod) => <Card key={pod.id} podcast={pod} />)
			) : null}
			{props.category === 251 ? (
				<h1>This works, category is football</h1>
			) : (
				<h1>Category is not football - {podcasts.name}</h1>
			)}
		</div>
	);
};

export default CardList;
