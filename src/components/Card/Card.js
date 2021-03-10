import React from 'react';
import './Card.css';
import icons8 from '../../images/Hashtag-26-52px/icons8-hashtag-52.png';
import rating from '../../images/Star-24-48px/icons8-star-48.png';
// import { PodcastContext } from '../../context/PodcastContext';

const Card = (props) => {
	// const [ podcasts, setPodcasts ] = useContext(PodcastContext);
	const { podcast } = props;
	console.log(podcast.rating, 'props in Card');
	// useEffect(() => {
	// 	setPodcasts({ name: 'adding stuff from the card component', price: '$1000', id: 7843 });
	// }, []);

	return (
		<div className="podcontainer">
			<div className="image">
				<a href={podcast.url} target="_blank" rel="noreferrer">
					<img
						className="podimage"
						src={
							podcast.image ? (
								podcast.image
							) : (
								'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Joe_Rogan_Experience_logo.jpg'
							)
						}
						alt="pod1"
					/>
				</a>
			</div>
			<div className="podtitle">
				<h1>{podcast.title.substring(0, 52)}</h1>
			</div>
			<div className="desc">
				<p className="ptext">{podcast.description.substring(0, 200).replace(/(<([^>]+)>)/gi, '')}...</p>
			</div>
			<div className="podButtons">
				<div className="webButton">
					<a href={podcast.website} target="_blank" rel="noreferrer">
						{/* <button
							onClick={() => {
								setPodcasts({ name: 'changed state after click', price: '$541', id: 7391 });
							}}
						>
							Website
						</button> */}
					</a>
				</div>
				<div className="webButton">
					<a href={podcast.website} target="_blank" rel="noreferrer">
						<button>Website</button>
					</a>
				</div>
				<div className="webButton">
					<a href={podcast.itunes} target="_blank" rel="noreferrer">
						<button>iTunes Link</button>
					</a>
				</div>
			</div>
			<div className="contratings">
				<div className="footeritem">
					<img className="ratingimage" src={icons8} alt="ratingimage" />
					<p className="ratingtext"># of Ratings</p>
					<p className="ratingtext">{podcast.numberOfRatings}</p>
				</div>
				<div className="footeritem">
					<img className="ratingimage" src={rating} alt="ratingimage" />
					<p className="ratingtext">iTunes Rating</p>
					<p className="ratingtext">{podcast.rating}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
