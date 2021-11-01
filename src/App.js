import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import { Toaster } from "react-hot-toast";
import VerifyUser from "./components/pages/auth/VerifyUser";
import RecoverPassword from "./components/pages/auth/RecoverPassword";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Checkout from './checkout/Checkout';
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/verify-user" component={VerifyUser}></Route>
          <Route path="/recover-password" component={RecoverPassword}></Route>
          <Route path="/reset-password/:token" component={ResetPassword}></Route>
          <Route path="/reset-password/:token" component={ResetPassword}></Route>
          <Route path="/checkout" component={Checkout}></Route>

        </Switch>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            color: "white",
          },
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
}

export default App;
