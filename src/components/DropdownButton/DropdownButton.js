import React, { useState } from 'react';
import Listen from '../Listen/Listen';

const DropdownButton = (props) => {
	console.log(props, 'dropdown array props');
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	//

	console.log({ value });
	// console.log(database());

	return (
		<div>
			{/* <form>
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
			</form> */}
			{/* <Listen category={value} onChange={handleChange} /> */}
		</div>
	);
};

export default DropdownButton;
