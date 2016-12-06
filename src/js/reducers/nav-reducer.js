import page from "../constants/page-constants";

const defaultState = {
  page: page.HOME
};
export default function reducer(state=defaultState, action) {
  console.log("reducing action", action.type, "payload", action.payload);
  switch (action.type) {
    case "SET_PAGE":
      return {...state, page: action.payload};
      break;
    case "SET_HOME_PAGE":
      return {...state, page: page.HOME};
      break;
  }
  return state;
}
