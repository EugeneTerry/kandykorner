import React, {useState, createContent} from "react"

export const LocationContext = createContent()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch("http:/localhost:8088/locations")
    .then(res => res.json())
    .then(setLocations)
  }

  const addLocation =locationObj => {
    return fetch("http:/localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(locationObj)
    })
    .then(getLocations)
  }
  return (
    <LocationContext.Provider value={{
      locations, getLocations, addLocation
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}