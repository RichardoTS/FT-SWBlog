import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext";

export default function Characters() {
  const { store, actions } = useContext(Context);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    actions.fetchPeople();
  }, []);

  const toggleFavourite = (name) => {
    if (store.favourites.includes(name)) {
      actions.removeFromFavourites(name);
    } else {
      actions.addToFavourites(name);
    }
  };

  const fetchCharacterDetails = async (url) => {
    const characterDetails = await actions.fetchCharacter(url);
    setSelectedCharacter(characterDetails);
  };

  return (
    <>
      <div className="text-center mt-5">
        {/* <h1>Characters</h1> */}
      </div>
      <div className="card-deck">
        {store.people.map((item, i) => {
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
                    fetchCharacterDetails(item.url);
                  }}
                >
                  View Details
                </button>
              </div>
              {selectedCharacter && selectedCharacter.name === item.name && (
                <div className="card-footer">
                  <div className="card-body">
                  <h6 className="card-title">{selectedCharacter.name}</h6>
                    <p className="card-text">
                      <strong>Height:</strong> {selectedCharacter.height}
                    </p>
                    <p className="card-text">
                      <strong>Mass:</strong> {selectedCharacter.mass}
                    </p>
                    <p className="card-text">
                      <strong>Hair color:</strong> {selectedCharacter.hair_color}
                    </p>
                    <p className="card-text">
                      <strong>Skin:</strong> {selectedCharacter.skin_color}
                    </p>
                    <p className="card-text">
                      <strong>Birth:</strong> {selectedCharacter.birth_year}
                    </p>
                    <p className="card-text">
                      <strong>Gender:</strong> {selectedCharacter.gender}
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
