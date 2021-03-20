import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
// import { PodcastContext } from '../../context/PodcastContext';

const CardList = (props) => {
	console.log(props, 'props ion cardlist');
	return (
		// <div id="preloader">
		// 	<div id="loader">
		<div className="container">
			<div className="CardList listen block">
				{props.podcasts.podcasts[0] ? (
					props.podcasts.podcasts[0].map((pod) => <Card key={pod.id} podcast={pod} />)
				) : null}
			</div>
		</div>
		// 	</div>
		// </div>
	);
};

export default CardList;
