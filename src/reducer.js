const initialState = {
  companies: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_COMPANIES':
      return {...state, companies: action.payload};
    default:
      return state;
  }
}

export default reducer;
