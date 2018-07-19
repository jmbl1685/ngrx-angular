import { HIDE_MODAL, REQUEST_API } from "../constants/action-types";

const initialState = {
  show: false,
  data: {}
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case HIDE_MODAL:
      return action;
    case REQUEST_API:
      return action;
    default:
      return state;
  }
};
export default rootReducer;