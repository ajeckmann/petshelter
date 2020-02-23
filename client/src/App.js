import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Viewpet from './views/Viewpet';
import Update from './views/Update';
import Add from './views/Add';

function App() {
  return (
    <div className="App">
      
    <Router>
    <Main path="/pets"/>
    <Add path="/pets/new"/>
    <Viewpet path="/pets/:id"/>
    <Update path="/edit/:id" />

    </Router>




    </div>
  );
}

export default App;
