import './App.css';

import Header from './components/Header/Header';
import DropdownButton from './components/DropdownButton/DropdownButton';
// import Listen from './components/Listen/Listen';
import { array1, array2 } from './utils/splitCategories';

function App() {
	return (
		<div className="App">
			<div className="main-header">
				<h1>TOP PODCASTS - TECHNOLOGY</h1>
				<Header />
				{/* <Listen /> */}
				<DropdownButton options={array1} />
				<DropdownButton options={array2} />
			</div>
		</div>
	);
}

export default App;
