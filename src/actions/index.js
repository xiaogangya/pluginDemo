import * as types from '../constants/ActionTypes'
import resources from '../constants/Resources'

export const receiveSources = () => ({
  type: types.RECEIVE_SOURCES,
  sources: resources
});

export const registerPlugin = (name, component, container) => ({
  type: types.REGISTER_PLUGIN,
  name: name,
  component: component,
  container: container
});

export const unregisterPlugin = (name, conponent, container) => ({
  type: types.UNREGISTER_PLUGIN,
  name: name,
  component: component,
  container: container
});