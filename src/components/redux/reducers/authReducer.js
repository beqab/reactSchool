import isEmpty from "../../validate/idEmty";
const initialState = {
  user: {},
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };
      break;
      return state;
  }
}
