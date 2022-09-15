import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
	const [ click, setClick ] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<div>
			<nav className="nav">
				<a className="logo" href="index.html">
					JULIA FELLER
				</a>
				<div>
					<ul id="navbar" className={click ? '#navbar active' : '#navbar'}>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="index.html">About</a>
						</li>
						<li>
							<a href="index.html">Projects</a>
						</li>
						<li>
							<a href="index.html">Contact</a>
						</li>
					</ul>
				</div>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
