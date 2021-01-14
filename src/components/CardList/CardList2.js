import React from 'react';
import './CardList.css';
import Card2 from '../Card/Card2';

// const CardList = ({ podcasts }) => {
const CardList = (props) => {
	console.log('props in CardList', props);
	return (
		<div>
			<h1>
				{/* {podcasts[0] && podcasts[0].value.podcasts[0].title} */}
				{/* {props.podcasts[0] && (
					<div>
						{props.podcasts[0].value.podcasts.map((item) => {
							// return item.value.podcasts[0].title;
							return <Card key={item.id} item={item} />;
						})}
					</div>
				)} */}
				<p>
					<Card2 item={props.podcasts} name={'John'} />
				</p>
			</h1>
		</div>
	);
};

export default CardList;
