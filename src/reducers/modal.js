import * as types from '../constants/modal';

const initalState = {
  showModal: false,
  title: null,
  component: null,
};

const reducer = (state = initalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case types.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    case types.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    }
    case types.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    }
    default:
      return state;
  }
};

export default reducer;