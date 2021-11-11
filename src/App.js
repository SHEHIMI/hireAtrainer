import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import Workout from "./pages/workoutPlans";
import About from "./pages/AboutUs";
import Profile from "./pages/profile";
import Trainer from "./pages/Trainers";
import Login from "./pages/login";
import Music from "./pages/Music";
import LoginGoogle from "./pages/GoogleLogin";
import Logout from "./pages/GoogleLogout";
import HomeCLient from "./pages/HomeClient";
import MusicClient from "./pages/MusicClient";
import TrainerClient from "./pages/TrainersClient";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/workoutPlans">
            <Workout />
          </Route>
          <Route path="/AboutUs">
            <About />
          </Route>
          <Route path="/Trainers">
            <Trainer />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Music">
            <Music />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/GoogleLogin">
            <LoginGoogle />
          </Route>
          <Route path="/GoogleLogout">
            <Logout />
          </Route>
          <Route path="/HomeClient">
            <HomeCLient />
          </Route>

          <Route path="/musicClient">
            <MusicClient />
          </Route>
          <Route path="/TrainerClient">
            <TrainerClient />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
