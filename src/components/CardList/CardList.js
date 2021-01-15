import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

// const CardList = ({ podcasts }) => {
const CardList = (props) => {
	console.log('props in CardList', props);
	return (
		<div className="card-list-container">
			{/* {podcasts[0] && podcasts[0].value.podcasts[0].title} */}
			{props.podcasts[0] && (
				<div classname="card-container">
					{props.podcasts.map((item) => {
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
