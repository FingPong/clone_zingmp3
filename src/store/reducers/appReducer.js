import actionType from "../actions/actionType";

const initState = {
  homeData: [],
  test: "Hello",
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return state;

    default:
      return state;
  }
};

export default appReducer;
