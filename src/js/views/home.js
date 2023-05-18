import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>May the force be with you... Always.</h1>
		</div>
	)
};