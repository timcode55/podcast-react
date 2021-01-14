let fullPodcastData;
async function podcast() {
	const response = await fetch('/podcasts');
	fullPodcastData = fullPodcastData || (await response.json());

	let ratingData = fullPodcastData;
	console.log(ratingData, 'ratingData');
}
podcast();
export default podcast;
