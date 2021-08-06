import React, {useContext, useEffect} from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList =()=>{
  const {locations, getLocations} = useContext
  (LocationContext)

  useEffect(() =>{
  console.log("LocationList: useEffect - getLocations");
  getLocations()
  }, [])

  return (
    <section className="locations">
      {locations.map((location)=>{
        return (
          <div className="location" id={`location--${location.id}`}>
            <div className="location__address">Address: {location.address}</div>
            <div className="location__squareFt">Square Footage: ${location.squareFt}</div>
            <div className="location__handicapAcc">Handicap Accessible: ${location.handicapAcc}</div>
          </div>
        )
      })}
    </section>
  )
}
