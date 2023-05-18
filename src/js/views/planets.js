import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";

export default function Planets() {
  const { store, actions } = useContext(Context);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  const toggleFavourite = (name) => {
    if (store.favourites.includes(name)) {
      actions.removeFromFavourites(name);
    } else {
      actions.addToFavourites(name);
    }
  };

  const fetchPlanetDetails = async (url) => {
    const planetDetails = await actions.fetchPlanet(url);
    setSelectedPlanet(planetDetails);
  };

  return (
    <>
      <div className="text-center mt-5">
        {/* <h1>Planets</h1> */}
      </div>
      <div className="card-deck">
        {store.planets.map((item, i) => {
          return (
            <div key={i} className="card mb-3">
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    toggleFavourite(item.name);
                  }}
                >
                  {store.favourites.includes(item.name) ? 'Remove' : <i className="fa-regular fa-heart"></i>}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    fetchPlanetDetails(item.url);
                  }}
                >
                  View Details
                </button>
              </div>
              {selectedPlanet && selectedPlanet.name === item.name && (
                <div className="card-footer">
                  <div className="card-body">
				  <h6 className="card-title">{selectedPlanet.name}</h6>
                    <p className="card-text">
                      <strong>Diameter:</strong> {selectedPlanet.diameter}
                    </p>
                    <p className="card-text">
                      <strong>Rotation Period:</strong> {selectedPlanet.rotation_period}
                    </p>
                    <p className="card-text">
                      <strong>Orbital Period:</strong> {selectedPlanet.orbital_period}
                    </p>
                    <p className="card-text">
                      <strong>Population:</strong> {selectedPlanet.population}
                    </p>
                    <p className="card-text">
                      <strong>Terrain:</strong> {selectedPlanet.terrain}
                    </p>
                    <p className="card-text">
                      <strong>Climate:</strong> {selectedPlanet.climate}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
