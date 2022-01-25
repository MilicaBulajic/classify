import createDataContext from "./createDataContext";


const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const login = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log(email);
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { login }
);
