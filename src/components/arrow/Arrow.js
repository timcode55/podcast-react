import React from 'react';
import './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/fontawesome-free-solid';

const Arrow = () => {
	return (
		<div className="page">
			<FontAwesomeIcon icon="arrow-alt-circle-left" size="6x" />
			<FontAwesomeIcon icon="arrow-alt-circle-right" size="6x" />
		</div>
	);
};

export default Arrow;
