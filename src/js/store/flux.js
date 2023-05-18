const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			people: [],
			planet: [],
			planets: [],
			vehicle: [],
			vehicles: [],
			favourites: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://www.swapi.tech/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ people: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://www.swapi.tech/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ planets: json.results});
			},
			fetchVehicles: async () => {
				const URL = "https://www.swapi.tech/api/vehicles/";
				const CONFIG = {
					method: "GET",
					headers:{
						"Content-Type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ vehicles: json.results});
			}
			,
			setFavourites: name => {
				const store = getStore();
				setStore({ favourites: [...store.favourites, name] });
			}
		}
	};
};1

export default getState;

// https://www.swapi.tech/api/