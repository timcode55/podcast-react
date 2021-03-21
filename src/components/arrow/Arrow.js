import React, { useContext } from 'react';
import './Arrow.css';
import { PodcastContext } from '../../context/PodcastContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/fontawesome-free-solid';

const Arrow = (props) => {
	const [ state, setState ] = useContext(PodcastContext);

	const changePage = () => {
		setState({ ...state, page: state.page + 1 });
	};

	return (
		<div className="page">
			<FontAwesomeIcon icon="caret-square-left" size="6x" id="arrow-left" />
			<FontAwesomeIcon icon="caret-square-right" size="6x" id="arrow-right" onClick={changePage} />
		</div>
	);
};

export default Arrow;
