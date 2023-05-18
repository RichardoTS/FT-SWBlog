import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"


export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					{`Favourites ${store.favourites.length}`}
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end">
					{
						store.favourites.map((item, i) => {
							return (
								<li ley={i}><a className="dropdown-item" >{item}</a></li>
							)
						}
						)
					}
				</ul>
			</div>
		</nav>
	);
};
