import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/User";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
}

const storedUser = localStorage.getItem("authUser");
const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken"),
  user: storedUser ? (JSON.parse(storedUser) as User) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ accessToken: string; user?: User }>) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user ?? state.user;
      localStorage.setItem("accessToken", action.payload.accessToken);
      if (action.payload.user) {
        localStorage.setItem("authUser", JSON.stringify(action.payload.user));
      }
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("authUser");
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
