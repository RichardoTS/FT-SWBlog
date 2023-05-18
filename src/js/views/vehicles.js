import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext"

export default function Vechiles() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchVehicles();
	}, [])

	return (
		<>
			<div className="text-center mt-5">
				<h1>Vechiles</h1>
				{/* <span>{JSON.stringify(store.favourites)}</span> */}
				{/* <span>{JSON.stringify(store.vehicles)}</span> */}

				<ul>
					{store.vehicles.map((item, i) => {
						return (
							<li key={i}>
								<span>{item.name}</span>
								{store.favourites.includes(item.name) ?
									null :
									<button type="button" className="btn btn-outline-secondary"
										onClick={() => { actions.setFavourites(item.name) }}><i class="fa-regular fa-heart"></i>
									</button>
								}
							</li>
						)
					})}
				</ul>

			</div>
		</>
	)
}
