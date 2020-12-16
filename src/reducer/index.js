const initialState = {
  user: {},
  jwt: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: action.payload.user,
        jwt: action.payload.jwt,
      };
    }

    default:
      return state;
  }
};
