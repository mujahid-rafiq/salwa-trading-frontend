import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  user: Record<string, unknown> | null;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken"),
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ accessToken: string; user?: Record<string, unknown> }>) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user ?? state.user;
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
