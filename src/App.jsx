import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/my.css";

import Admin from "./pages/admin";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Admin />
      <Login />
    </div>
  );
}

export default App;
