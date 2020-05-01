import * as types from '../constants/ui';

const initalState = {
  showLoading: false,
};

const reducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case types.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
