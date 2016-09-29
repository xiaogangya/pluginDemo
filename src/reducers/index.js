import { combineReducers } from 'redux'
import sources from './sources'
import plugins from './plugins'

const app = combineReducers({
  sources,
  plugins
});

export default app;