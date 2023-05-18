import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext"

export default function Characters() {
  const { store, actions } = useContext(Context);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    actions.fetchPeople();
    // getCharacter(`${}`)
  }, [])

  return (
    <>
      <div className="text-center mt-5">
        <h1>Characters</h1>
        {/* <span>{JSON.stringify(store.favourites)}</span> */}
        {/* <span>{JSON.stringify(store.people)}</span> */}
        {/* <div className="col-md-12 d-flex justify-content-between py-3">
          <button className={"btn btn-primary btn-sm " + (characters?.previous ? "" : "disabled")}
            onClick={() => fetchPeople(characters?.previous)}
          >
            Prev
          </button>
          <button className={"btn btn-primary btn-sm " + (characters?.next ? "" : "disabled")}
            onClick={() => fetchPeople(characters?.next)}
          >
            Next
          </button>
        </div> */}

        <ul>
          {store.people.map((item, i) => {
            return (
              <li key={i}>
                <span>{item.name}</span>
                {store.favourites.includes(item.name) ?
                  null :
                  <button type="button" className="btn btn-outline-secondary"
                    onClick={() => { actions.setFavourites(item.name) }}><i class="fa-regular fa-heart"></i>
                  </button>}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
