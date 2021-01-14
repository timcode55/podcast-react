async function database() {
	const response = await fetch('/topTwenty').then((res) =>
		res.json().then((data) => {
			console.log('data', data);
		})
	);
	console.log(response, 'response');
}

database();
export default database;
