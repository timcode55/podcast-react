import React, { useState, useEffect, useContext } from 'react';
// import DropdownButton from '../DropdownButton/DropdownButton';
// import Listen from '../Listen/Listen';
import CardList from '../CardList/CardList';
// import Gap from '../../components/gap/Gap';
import { array1, array2 } from '../../utils/category-list';
import './Header.css';
import { PodcastContext } from '../../context/PodcastContext';

const Header = (props) => {
	const [ podcasts, setPodcasts ] = useContext(PodcastContext);
	console.log(props, 'props in Header');
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
		props.getApiData(e.target.value);
	};

	// useEffect(
	// 	() => {
	// 		console.log('useeffect ran in Header.js');
	// 		setPodcasts((podcasts) => ({
	// 			...podcasts,
	// 			// name: 'changing setpodcasts in Header after selection box changed',
	// 			// price: '$4751',
	// 			// id: 5894,
	// 			value: { value }
	// 		}));
	// 	},
	// 	[ value ]
	// );
	// console.log(array1, array2);
	return (
		<div className="test">
			<div className="header-main">
				<h1>TOP PODCASTS - </h1>
				<form className="select">
					<label>
						<span className="dropdown-title">Choose a Genre</span>
						<select onChange={handleChange}>
							{array1.map((item) => {
								return (
									<option key={item.id} value={item.id}>
										{item.name}
									</option>
								);
							})}
						</select>
					</label>
				</form>

				<form className="select">
					<label>
						<span className="dropdown-title">Choose a Genre</span>
						<select onChange={handleChange}>
							{array2.map((item) => {
								return (
									<option className="option" key={item.id} value={item.id}>
										{item.name}
									</option>
								);
							})}
						</select>
					</label>
				</form>
			</div>
			<CardList podcasts={props} category={parseInt(value)} getApiData={props.getApiData} />
		</div>
	);
};

export default Header;
