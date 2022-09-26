import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DotLoader from 'react-spinners/DotLoader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';

function App() {
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="preloader">
					<DotLoader color={'var(--color-yellow)'} loading={loading} size={120} />
				</div>
			) : (
				<Navbar />
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			{/* 	If route does not exist, navigate to home
				<Route path="*" element={"/"} /> */}
			</Routes>
		</>
	);
}

export default App;

//useState -> to keep track of a loading variable that is going to tell us to display and remove the loading screen.
//useEffect -> in this case it serves as our live cycle method. By adding an empty array it runs only one time when the page is rendered and when its rendered, we set the loading to true and after 5sek we set the loading to false. To that, we can use setTimeOut.


