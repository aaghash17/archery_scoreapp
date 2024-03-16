import { useState } from "react";

function Admin() {
  const [eventname, seteventname] = useState("");
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-dark bg-primary rounded py-4">
        <div className="container text-center">
          <span className="navbar-brand mb-0 h1 my-margin-auto my-font-2rem">
            Admin Page
          </span>
        </div>
      </nav>
      <div className="container mt-4">
        <h4>Event name</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="eventname"
            value={eventname}
            onChange={(event) => seteventname(event.target.value)}
            required
          />
          <button className="btn btn-primary" type="button">
            Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
