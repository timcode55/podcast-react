import React from 'react';
import './CardList.css';
import Card from '../Card/Card';
import Arrow from '../arrow/Arrow';

const CardList = (props) => {
	let loader = `<div id="preloader">
  <div id="loader"></div>
  </div>`;

	return (
		<div className="container">
			<div className="podcast-display">
				{props.podcasts.podcasts[0] ? (
					props.podcasts.podcasts[0].map((pod) => <Card key={pod.id} podcast={pod} />)
				) : (
					<div id="preloader">
						<div id="loader" />
					</div>
				)}
				{props.podcasts.podcasts[0] ? <Arrow /> : null}
			</div>
		</div>
	);
};

export default CardList;
