import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Styles
import "./App.css";

//Authorization
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// Pages
import Home from "./pages/Home";
import HivePublic from "./pages/HivePublic";

Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/HivePublic" component={HivePublic} />
      </Router>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
}

export default App;
