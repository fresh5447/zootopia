import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './HomeContainer';
import Animals from './AnimalsContainer';
import PostAnimalContainer from './PostAnimalContainer';
import EditAnimalContainer from './EditAnimalContainer';

import Signup from './userAuth/signup';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/animals" component={Animals}/>
      <Route path="/post" component={PostAnimalContainer}/>
      <Route path="/edit/:animalId" component={EditAnimalContainer}/>
      <Route path="/signup" component={Signup}/>
    </Route>
  </Router>
), document.getElementById('root'))
