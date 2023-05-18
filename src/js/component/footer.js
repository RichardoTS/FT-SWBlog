import React, { Component } from "react";
import Obi from "../../img/Obi.jpg"
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<Link to="/students">Hello there...</Link>
			<img src={Obi} />
		</p>
	</footer>
);
