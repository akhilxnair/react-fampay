/*
 * Copyright ©2020 Akhil Nair - All rights reserved.
 */

// Import Modules
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import Routes
import Main from './Routes/Main/Main';
import CardDetails from './Routes/CardDetails/CardDetails';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/card-details" component={CardDetails} />
    </Switch>
  </BrowserRouter>
);

export default App;
