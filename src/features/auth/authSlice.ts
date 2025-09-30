import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import Cookies from "js-cookie";
import type { AuthState } from "../../type/type";

const initialState: AuthState = {
  access_token: Cookies.get("access_token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<string>
    ) => {
      state.access_token = action.payload;
      Cookies.set("access_token", action.payload);
    },
    logOut: (state) => {
      state.access_token = null;
    },
  },
});

export const { setTokens, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectAccessToken = (state: RootState) => state.auth.access_token;
