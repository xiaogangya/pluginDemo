import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { receiveSources, registerPlugin, unregisterPlugin } from './actions/index'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { getPlugins } from './api'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(reducer, compose(applyMiddleware(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f));
store.dispatch(receiveSources());
getPlugins().then(plugins => {
  plugins.forEach(x => {
    if (x.name && x.containerType && x.url) {
      store.dispatch(registerPlugin(x.name, x.component, x.containerType, x.url));
    }
  });
});

window.store = store;
window.registerPlugin = registerPlugin;
window.unregisterPlugin = unregisterPlugin;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
