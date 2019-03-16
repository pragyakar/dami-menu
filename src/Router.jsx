import * as React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as routes from './constants/routes';

import Landing from './components/Landing';
import Menu from './components/Menu';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.LANDING} component={Landing}/>
      <Route path={routes.MENU} component={Menu}/>
    </Switch>
  </BrowserRouter>
);

export default App;