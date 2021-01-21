import React from 'react';
import './Card.css';
import icons8 from '../../images/Hashtag-26-52px/icons8-hashtag-52.png';
import rating from '../../images/Star-24-48px/icons8-star-48.png';

const Card = (props) => {
	console.log(props, 'props in Card');
	return (
		<div className="podcontainer">
			<div className="image">
				<a href={props.podcast.url} target="_blank" rel="noreferrer">
					<img
						className="podimage"
						src={
							props.podcast.image ? (
								props.podcast.image
							) : (
								'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Joe_Rogan_Experience_logo.jpg'
							)
						}
						alt="pod1"
					/>
				</a>
			</div>
			<div className="podtitle">
				<h1>{props.podcast.title.substring(0, 52)}</h1>
			</div>
			<div className="desc">
				<p className="ptext">{props.podcast.description.substring(0, 200).replace(/(<([^>]+)>)/gi, '')}...</p>
			</div>
			<div className="podButtons">
				<div className="webButton">
					<a href={props.podcast.website} target="_blank" rel="noreferrer">
						<button>Website</button>
					</a>
				</div>

				<div className="webButton">
					<a href={props.podcast.itunes} target="_blank" rel="noreferrer">
						<button>iTunes Link</button>
					</a>
				</div>
			</div>
			<div className="contratings">
				<div className="footeritem">
					<img className="ratingimage" src={icons8} alt="ratingimage" />
					<p className="ratingtext"># of Ratings</p>
					<p className="ratingtext">{props.podcast.numberOfRatings}</p>
				</div>
				<div className="footeritem">
					<img className="ratingimage" src={rating} alt="ratingimage" />
					<p className="ratingtext">iTunes Rating</p>
					<p className="ratingtext">{props.podcast.rating}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
