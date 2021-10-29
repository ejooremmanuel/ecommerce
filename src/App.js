import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage/HomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";
import Shop from "./Shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Verify from "./pages/Register/Verify";
import { UserContext } from "./context/UserContext";
function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        error,
        setError,
        setSuccess,
        success,
        password,
        setPassword,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/verify" component={Verify} />
          <Route exact path="/user/logout" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
