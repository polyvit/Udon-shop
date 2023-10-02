import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    token: null,
    id: null,
    password: null,
    displayName: null,
  },
  formType: "signup",
  showForm: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleForm(state, { payload }) {
      state.showForm = payload;
    },
    toggleFormType(state, { payload }) {
      state.formType = payload;
    },
    setUser(state, { payload }) {
      state.user.email = payload.email;
      state.user.token = payload.token;
      state.user.id = payload.id;
      state.user.password = payload.password;
      state.user.displayName = payload.displayName;
    },
  },
});

export const { toggleForm, toggleFormType, setUser } = userSlice.actions;
export default userSlice.reducer;
