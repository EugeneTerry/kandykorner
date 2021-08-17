import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  return (
    <>
    <h2>Locations</h2>
    <section className="locations">
      {locations.map((location) => {
        return (
          <div className="location" id={`location--${location.id}`}>
            <div className="location__id">Store #{location.id}</div>
            <div className="location__address">Address: {location.address}</div>
            <div className="location__squareFt">Square Footage: {location.squareFt}</div>
            {location.handicapAcc ? <div className="location__handicapAcc">Handicap Accessible: Yes</div> : <div className="location__handicapAcc">Handicap Accessible: NO</div>}
          </div>
        );
      })}
    </section>
    </>
  );
};
