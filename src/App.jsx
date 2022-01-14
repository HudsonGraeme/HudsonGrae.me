import "tailwindcss/dist/base.css";
import "./index.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import {connect} from 'react-redux';

import HomePage from "./pages/First.jsx";
import PostsPage from "./pages/Posts.jsx";
import PrivacyPage from "./pages/PrivacyPolicy.jsx";
import ContactPage from "./pages/Contact.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import posts from "./data/Posts";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}
export default connect()(App);
