import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import BusDetails from './Component/BusDetails/BusDetails';
import Login from './Component/LogInForm/login';
import PrivateRoute from './Component/PrivetRoute/PrivateRoute';
import PrivetRouteForDes from './Component/PrivetRoute/PrivetRouteForDes';
import PrivetRouteForLogin from './Component/PrivetRoute/PrivetRouteForLogin';

export const UserContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Switch>
        <Route path="/home">
          <Header></Header>
          <Home></Home>
        </Route>

        <PrivateRoute path="/busDetails/:busId">
          <BusDetails></BusDetails>
        </PrivateRoute>

        <PrivetRouteForDes path="/busDetails">
          <BusDetails></BusDetails>
        </PrivetRouteForDes>

        <PrivetRouteForLogin path="/busDetails" >
         <BusDetails></BusDetails>
        </PrivetRouteForLogin>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/">
          <Header></Header>
          <Home></Home>
        </Route>

        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
