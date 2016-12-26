import data from './data';

const reducer = (state = {currentInfo: null, activePath: '', posts: data}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INFO':
      return Object.assign({}, state, {currentInfo: action.payload, activePath: action.payload})
    default:
      return state
  }
}

export default reducer;
