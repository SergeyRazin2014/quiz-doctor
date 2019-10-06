import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
//--
import createRootReducer from './redux/reducers';
import routes from './routes';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares)),
);


ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
