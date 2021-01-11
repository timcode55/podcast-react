import React, { useState } from 'react';
import Listen from '../Listen/Listen';

const DropdownButton = (props) => {
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	console.log({ value });
	return (
		<div>
			<form>
				<label>
					<span className="dropdown-title">Choose a Genre</span>
					<select onChange={handleChange}>
						{props.options.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							);
						})}
					</select>
				</label>
			</form>
			<Listen category={value} />
		</div>
	);
};

export default DropdownButton;
