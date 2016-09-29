import * as types from '../constants/ActionTypes'

const sources = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_SOURCES:
      return action.sources;
    default:
      return state;
  }
};

export default sources;

export function getSources(state) {
  return state;
}