import * as types from '../constants/ActionTypes'

const plugin = (state, action) => {
  switch (action.type) {
    case types.REGISTER_PLUGIN:
      return {
        name: action.name,
        component: action.component,
        container: action.container
      };
    case types.UNREGISTER_PLUGIN:
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
    case types.REGISTER_PLUGIN:
      return [
        ...state,
        plugin(undefine, action)
      ];
    case types.UNREGISTER_PLUGIN:
      return state.map(p => plugin(p, action));
    default:
      return state;
  }
};

export default plugins;