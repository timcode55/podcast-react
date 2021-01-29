import React, { createContext, useState } from 'react';

export const PodcastContext = createContext();

export const PodcastProvider = (props) => {
	const [ podcasts, setPodcasts ] = useState({ podcasts: [] });
	return (
		<div>
			<PodcastContext.Provider value={[ podcasts, setPodcasts ]}>{props.children}</PodcastContext.Provider>
		</div>
	);
};

export default PodcastContext;
