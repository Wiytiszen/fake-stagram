import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
import "./styles/style.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// 1. adding React-Redux
// 2. Create a Store.js and import it here
// 3. Create Action Folder and file
// 4. Create Reducer Folder and file
// 5. add Provider to the app and store
import store from "./store";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

const router = (
  <Provider store={store}>
    <Router>
          <Route  path="/" component={Header} />
          <Switch>
            <Route  exact path="/" component={PhotoGrid} />
            <Route  exact path="/view/:photoId" component={Single} />
          </Switch>
    </Router>
  </Provider>
);
render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
