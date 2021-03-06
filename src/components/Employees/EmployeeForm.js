import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Location/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
    manager: "",
    fulltime: "",
    hourly: 0
  });
  const history = useHistory();

  useEffect(() => {
    getLocations();
  }, []);

  const handleControlledInputChange = (event) => {
    const newEmployee = { ...employee };
    newEmployee[event.target.id] = event.target.value;
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (event) => {
    event.preventDefault();

    const locationId = parseInt(employee.locationId);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      const newEmployee = {
        name: employee.name,
        locationId: locationId,
        manager: employee.manager,
        fulltime: employee.fulltime,
        hourly: employee.hourly

      };
      addEmployee(newEmployee).then(() => history.push("/employees"));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Employee Name:</label>
          <input
            type="text"
            id="name"
            required
            utoFocus
            className="form-control"
            placeholder="Employee name"
            value={employee.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location"> Assign to location: </label>
          <select
            name="locationId"
            id="locationId"
            className="form-control"
            value={employee.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager"> Manager:</label>
          <select
            name="manager"
            id="manager"
            required
            utoFocus
            className="form-control"
            placeholder="Manager"
            value={employee.manager}
            onChange={handleControlledInputChange}>
            <option value="0">Yes or No</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="fulltime"> Fulltime:</label>
          <select
            name="fulltime"
            id="fulltime"
            required
            utoFocus
            className="form-control"
            placeholder="Fulltime"
            value={employee.fulltime}
            onChange={handleControlledInputChange}>
            <option value="0">Yes or No</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="hourly"> Hourly Pay:</label>
          <input
            type="number"
            id="hourly"
            required
            utoFocus
            className="form-control"
            placeholder="Hourly"
            value={employee.hourly}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
};
