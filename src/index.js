import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { receiveSources } from './actions/index'

const store = createStore(reducer);
store.dispatch(receiveSources());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
