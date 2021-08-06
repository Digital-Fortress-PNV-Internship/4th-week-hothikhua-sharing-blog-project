import React, {  useEffect, useCallback } from "react";
import { Router , Switch, Route} from "react-router-dom";

import './App.css';

import Header from './components/Header';
import SmoothScroll from 'smooth-scroll'
import BlogDetail from './components/BlogDetail';
import Home from './pages/home/index'
import Footer from './components/Footer';
import IndexContact from './pages/contact';
import IndexLogin from "./pages/login";
import IndexRegister from './pages/register';

import { logouts } from "./redux/actions/auth";
import {clearMessage} from "./redux/actions/message";

import { history } from "./redux/helpers/history";
import { useDispatch, useSelector } from "react-redux";


import EventBus from "./redux/common/EvenBus";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () =>{

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logouts());
  }, [dispatch]);

  useEffect(() => {
   
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  
  
  return (
    <Router history={history}>
      <div className="App"> 
        <Header logOut={logOut}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog/:id">
            <BlogDetail/>
          </Route>
          <Route path="/contact">
            <IndexContact />
          </Route>
          <Route exact path="/register">
            <IndexRegister />
          </Route>
          <Route exact path="/login">
            <IndexLogin/>
          </Route>
        </Switch>
        <Footer/>  
      </div>
  </Router>
  );
}

export default App;
