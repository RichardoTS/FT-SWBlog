import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";

export default function Vehicles() {
  const { store, actions } = useContext(Context);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    actions.fetchVehicles();
  }, []);

  const toggleFavourite = (name) => {
    if (store.favourites.includes(name)) {
      actions.removeFromFavourites(name);
    } else {
      actions.addToFavourites(name);
    }
  };

  const fetchVehicleDetails = async (url) => {
    const vehicleDetails = await actions.fetchVehicle(url);
    setSelectedVehicle(vehicleDetails);
  };

  return (
    <>
      <div className="text-center mt-5">
        {/* <h1>Vehicles</h1> */}
      </div>
      <div className="card-deck">
        {store.vehicles.map((item, i) => {
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
                    fetchVehicleDetails(item.url);
                  }}
                >
                  View Details
                </button>
              </div>
              {selectedVehicle && selectedVehicle.name === item.name && (
                <div className="card-footer">
                  <div className="card-body">
                    <h6 className="card-title">{selectedVehicle.name}</h6>
                    <p className="card-text">
                      <strong>Model:</strong> {selectedVehicle.model}
                    </p>
                    <p className="card-text">
                      <strong>Vehicle Class:</strong> {selectedVehicle.vehicle_class}
                    </p>
                    <p className="card-text">
                      <strong>Cost:</strong> {selectedVehicle.cost_in_credits}
                    </p>
                    <p className="card-text">
                      <strong>Length:</strong> {selectedVehicle.length}
                    </p>
                    <p className="card-text">
                      <strong>Max speed:</strong> {selectedVehicle.max_atmosphering_speed}
                    </p>
                    <p className="card-text">
                      <strong>Crew:</strong> {selectedVehicle.crew}
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
