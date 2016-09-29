import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { receiveSources, registerPlugin } from './actions/index'
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
    if (x.name && x.container && x.url) {
      store.dispatch(registerPlugin(x.name, x.component, x.container, x.url));
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
