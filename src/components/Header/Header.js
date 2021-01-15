import React, { useState } from 'react';
// import DropdownButton from '../DropdownButton/DropdownButton';
import Listen from '../Listen/Listen';
import CardList from '../CardList/CardList';
import Gap from '../../components/gap/Gap';
import { array1, array2 } from '../../utils/splitCategories';
import './Header.css';

const Header = (props) => {
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	// console.log(array1, array2);
	return (
		<div classname="header-main">
			<div className="selection-boxes">
				<div>
					<form>
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
				</div>
				<div>
					<form>
						<label>
							<span className="dropdown-title">Choose a Genre</span>
							<select onChange={handleChange}>
								{array2.map((item) => {
									return (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									);
								})}
							</select>
						</label>
					</form>
				</div>
			</div>
			<Gap />
		</div>
	);
};

export default Header;
