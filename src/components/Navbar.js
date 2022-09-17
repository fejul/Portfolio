import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
	const [ click, setClick ] = useState(false);

	const handleClick = () => setClick(!click);
	//??? Which link for logo? or App???
	return (
		<header>
			<nav className="nav">
				<Link className="logo" to="/">
					JULIA FELLER
				</Link>
				<div>
					<ul id="navbar" className={click ? '#navbar active' : '#navbar'}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
