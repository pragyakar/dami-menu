import * as React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as routes from './constants/routes';

import Landing from './components/Landing';
import Menu from './components/Menu';
import MenuDetails from './components/Menu/MenuDetails';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.LANDING} component={Landing}/>
      <Route path={routes.MENU} component={Menu}/>
      <Route path={routes.DETAILS} component={MenuDetails} />
    </Switch>
  </BrowserRouter>
);

export default App;