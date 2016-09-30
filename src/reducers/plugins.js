import * as actionTypes from '../constants/ActionTypes'

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
          {
            name: action.name,
            component: action.component,
            containerType: action.containerType,
            url: action.url,
            enable: true
          }
        ];
      }
    case actionTypes.UNREGISTER_PLUGIN:
      return state.filter(p => p.name !== action.name);
    case actionTypes.ENABLE_PLUGIN:
      if (state.find(p => p.name === action.name)) {
        return state.map(p => {
          if (p.name === action.name) {
            p.enable = action.enable;
          }
          return p;
        })
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default plugins;

export function getPlugins(state) {
  return state;
}

export function getPluginsByContainer(state, containerType) {
  return state.filter(x => x.containerType === containerType && x.enable)
}