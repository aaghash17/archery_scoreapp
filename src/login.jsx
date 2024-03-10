import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './my.css'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Username:", username);
        console.log("Password:", password);
    };
    return (
      <div className="my-login-container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h3 className="text-center">Event Name</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)} 
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <br></br>
            <p className="w-100 text-center">Not Registered? Sign Up</p>
          </form>
        </div>
      );
}

export default Login;