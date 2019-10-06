import React from 'react';
import { Switch, Route } from 'react-router';

import App from './components/app';

// import Phones from 'containers/phones';
// import Phone from 'containers/phone';
// import Basket from 'containers/basket';

export default (
  <Switch>
    <Route path="/" component={App} exact />
    {/* //КОМПОНЕНТ БЕРЕМ ТОТ ЖЕ, НО URL ДРУГОЙ (ИЗ НЕГО БЕРЕМ ID) */}
    {/* <Route path='/categories/:id' component={Phones} exact /> */}
    {/* <Route path='/phones/:id' component={Phone} exact /> */}
    {/* <Route path='/basket' component={Basket} exact /> */}
  </Switch>
);
