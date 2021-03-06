import React from 'react';
import './Card.css';

const Card2 = (props) => {
	console.log(props, 'props in Card2');
	return (
		// <div className="main-container">
		<div className="podcontainer">
			<div className="image">
				<img className="podimage" src={props.image} alt="pod1" />
				{/* </a> */}
			</div>
			<div className="podtitle">
				<h1>${props.title}</h1>
			</div>
			<div className="desc">
				<p className="ptext" />
			</div>
			<div className="podButtons">
				<div className="webButton">
					<a href={props.website} target="_blank" rel="noreferrer">
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
					<p className="ratingtext">{props.item.numberRatings}</p>
				</div>
				<div className="footeritem">
					<img className="ratingimage" src="images/Star-24-48px/icons8-star-48.png" alt="ratingimage" />
					<p className="ratingtext">iTunes Rating</p>
					<p className="ratingtext">{props.item.rating}</p>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Card2;
