const initialState = {
  user: {},
  jwt: "",
  isUser: false,
  appointments: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: action.payload.user.user,
        jwt: action.payload.user.jwt,
        isUser: true,
        appointments: action.payload.user.appointments,
      };
    }
    case "USER_LOGOUT": {
      return {
        ...state,
        user: {},
        jwt: "",
        isUser: false,
        appointments: [],
      };
    }

    default:
      return state;
  }
};
