import "tailwindcss/dist/base.css";
import "./index.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import {connect} from 'react-redux';

import HomePage from "./pages/Home.jsx";
import PostsPage from "./pages/Posts.jsx";
import PrivacyPage from "./pages/PrivacyPolicy.jsx";
import ContactPage from "./pages/Contact.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import posts from "./data/Posts";
//import {isMobile} from "react-device-detect";

function App() {
  return (
    <Router>
      <Switch>
      {Object.keys(posts).map((e,i) => {
          return (
            <Route key={i} path={"/posts/"+e}>
              {e.page}
            </Route>
          )
        })}
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
        <Route path="/contact">
          <ContactPage/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default connect()(App);
