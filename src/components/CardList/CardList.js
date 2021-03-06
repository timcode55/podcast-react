import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = ({ podcasts }) => {
	console.log('props in CardList', podcasts[0]);
	return (
		<div>
			<h1>
				{/* {podcasts[0] && podcasts[0].value.podcasts[0].title} */}
				{podcasts[0] && (
					<div>
						{podcasts[0].value.podcasts.map((item) => {
							// return item.value.podcasts[0].title;
							return <Card key={item.id} item={item} />;
						})}
					</div>
				)}
			</h1>
		</div>
	);
};

export default CardList;
