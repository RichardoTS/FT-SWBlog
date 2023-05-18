import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" height="40" alt="Star Wars" />
			</Link>
			<Link to="/characters">
				<span className="navbar-brand mb-3 h1"><i class="fa-brands fa-jedi-order"> Characters</i></span>
			</Link>
			<Link to="/planets">
				<span className="navbar-brand mb-3 h1"><i class="fa-solid fa-jedi"> Planets</i></span>
			</Link>
			<Link to="/vehicles">
				<span className="navbar-brand mb-3 h1"><i class="fa-brands fa-galactic-republic"> Vehicles</i></span>
			</Link>
		</nav>
	);
};
