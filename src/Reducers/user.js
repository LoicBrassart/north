const initialState = {
  id: null,
  email: null,
  pseudo: null,
  avatar: null,
};

export default (state = initialState, action) => {
  const { type, load } = action;
  switch (type) {
    case 'USER_LOGIN':
      return { ...state, ...load };
    case 'USER_LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
};
