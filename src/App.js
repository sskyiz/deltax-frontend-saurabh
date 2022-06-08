import React, { Fragment } from 'react';
import Home from "./Component/Home";
import Songs from "./Component/Songs";
import Artist from "./Component/Artist";
import AddSong from "./Component/AddSong";
import AddArtist from "./Component/AddArtist";

import { BrowserRouter as Router,Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route  path='/artist'>
              <Artist/>
            </Route>
            <Route  path='/songs'>
              <Songs/>
            </Route>
            <Route  path='/addSong'>
              <AddSong/>
            </Route>
            <Route  path='/addArtist'>
              <AddArtist/>
            </Route>
          </Switch>
        </Router>
      </Fragment>
  );
}

export default App;
