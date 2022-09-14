import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DotLoader from 'react-spinners/DotLoader';

function App() {
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1800);
	}, []);

	return (
		<React.Fragment>
			{loading ? (
				<div className="preloader">
					<DotLoader color={'#FFEC3C'} loading={loading} size={120} />
				</div>
			) : (
				<Navbar />
			)}
		</React.Fragment>
	);
}

export default App;

//useState -> to keep track of a loading variable that is going to tell us to display and remove the loading screen.
//useEffect -> in this case it serves as our live cycle method. By adding an empty array it runs only one time when the page is rendered and when its rendered, we set the loading to true and after 5sek we set the loading to false. To that, we can use setTimeOut.
