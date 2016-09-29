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
      if (state.find(p => p.name === action.name)) {
        return state.map(p => {
          if (p.name === action.name) {
            p.component = action.component ? action.component : p.component;
            p.containerType = action.containerType ? action.containerType : p.containerType;
            p.url = action.url ? action.url : p.url;
          };
          return p;
        });
      } else {
        return [
          ...state,
          plugin(undefined, action)
        ];
      }
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