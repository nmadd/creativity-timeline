import data from './data';

console.log('data???', data);

const reducer = (state = {currentInfo: null}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INFO':
      const newInfo = data[action.payload];
      return Object.assign({}, state, {currentInfo: newInfo})
    default:
      return state
  }
}

export default reducer;
