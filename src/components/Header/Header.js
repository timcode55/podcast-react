import React, { useState } from 'react';
import CardList from '../CardList/CardList';
import { array1, array2, categoriesArray } from '../../utils/category-list';
import './Header.css';

const Header = (props) => {
	console.log(props, 'props in Header');
	const [ value, setValue ] = useState('');
	const [ category, setCategory ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
		let findValue = Number(e.target.value);
		let findCategory = categoriesArray.find((item) => item.id === findValue).name;
		setCategory(findCategory);
		props.getApiData(e.target.value);
	};

	return (
		<div className="">
			<div className="top-section">
				<h1 className="title">TOP PODCASTS - {category.toUpperCase()}</h1>
				<div className="selection-boxes">
					<div className="selection-box">
						<form className="select">
							<label for="podcasts">
								<span className="dropdown-title">Choose a Genre</span>
							</label>
							<select id="selection" name="scripts" onChange={handleChange}>
								{array1.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									);
								})}
							</select>
						</form>
					</div>
					<div className="selection-box">
						<form className="select">
							<label for="podcasts">
								<span className="dropdown-title">Choose a Genre</span>
								<select id="selection2" name="scripts" onChange={handleChange}>
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
				</div>
			</div>
			<CardList podcasts={props} category={parseInt(value)} getApiData={props.getApiData} />
		</div>
	);
};

export default Header;
