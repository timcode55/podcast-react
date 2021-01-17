import React, { useState, useEffect } from 'react';
// import DropdownButton from '../DropdownButton/DropdownButton';
// import Listen from '../Listen/Listen';
import CardList from '../CardList/CardList';
// import Gap from '../../components/gap/Gap';
import { array1, array2 } from '../../utils/splitCategories';
import './Header.css';

const Header = (props) => {
	console.log(props, 'props in Header');
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		console.log('useeffect ran in Header.js');
		document.title = `UseEffect ${value}`;
	});
	// console.log(array1, array2);
	return (
		<div className="test">
			<div className="header-main">
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
			<CardList podcasts={props} category={parseInt(value)} />
		</div>
	);
};

export default Header;
