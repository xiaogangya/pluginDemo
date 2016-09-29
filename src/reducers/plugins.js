import * as actionTypes from '../constants/ActionTypes'

const plugin = (state, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_PLUGIN:
      return {
        name: action.name,
        component: action.component,
        containerType: action.containerType,
        url: action.url
      };
    case actionTypes.UNREGISTER_PLUGIN:
      if (state.name !== action.name) {
        return state;
      }
      return {
      };
    default:
      return state;
  }
};

const plugins = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REGISTER_PLUGIN:
      return [
        ...state,
        plugin(undefined, action)
      ];
    case actionTypes.UNREGISTER_PLUGIN:
      return state.map(p => plugin(p, action));
    default:
      return state;
  }
};

export default plugins;

export function getPlugins(state) {
  return state;
}

export function getPluginsByContainer(state, containerType) {
  return state.filter(x => x.containerType === containerType)
}