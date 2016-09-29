import * as actionTypes from '../constants/ActionTypes'
import resources from '../constants/Resources'

export const receiveSources = () => ({
  type: actionTypes.RECEIVE_SOURCES,
  sources: resources
});

export const registerPlugin = (name, component, containerType, url) => ({
  type: actionTypes.REGISTER_PLUGIN,
  name: name,
  component: component,
  containerType: containerType,
  url: url
});

export const unregisterPlugin = (name) => ({
  type: actionTypes.UNREGISTER_PLUGIN,
  name: name
});