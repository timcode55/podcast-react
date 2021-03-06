import React from 'react';
import './Card.css';

const Card = ({ item }) => {
	return (
		// <div className="main-container">
		<div className="podcontainer" key={item.id}>
			<div className="image">
				{/* <a href="#" target="_blank"> */}
				<img className="podimage" src={item.image} alt="pod1" />
				{/* </a> */}
			</div>
			<div className="podtitle">
				<h1>${item.title}</h1>
			</div>
			<div className="desc">
				<p className="ptext" />
			</div>
			<div className="podButtons">
				<div className="webButton">
					<a href={item.website} target="_blank" rel="noreferrer">
						<button>Website</button>
					</a>
				</div>
				<div className="webButton">
					{/* <a href="#" target="_blank"> */}
					<button>iTunes Link</button>
					{/* </a> */}
				</div>
			</div>
			<div className="contratings">
				<div className="footeritem">
					<img className="ratingimage" src="images/Hashtag-26-52px/icons8-hashtag-52.png" alt="ratingimage" />
					<p className="ratingtext"># of Ratings</p>
					<p className="ratingtext">${1 + 1}</p>
				</div>
				<div className="footeritem">
					<img className="ratingimage" src="images/Star-24-48px/icons8-star-48.png" alt="ratingimage" />
					<p className="ratingtext">iTunes Rating</p>
					<p className="ratingtext">${1 + 1}</p>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Card;
