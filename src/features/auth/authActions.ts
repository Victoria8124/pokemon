import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser, IAuthResponse } from "../../type/type";
import { AuthService } from "../../services/AuthService";
import { setTokens } from "./authSlice";

export const login = createAsyncThunk<IAuthResponse, IUser>(
  "auth/login",
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const resp = await AuthService.login(user);
      dispatch(setTokens(resp.access_token));
      return resp;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const registration = createAsyncThunk<IAuthResponse, IUser>(
  "auth/registration",
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const resp = await AuthService.registration(user);
      dispatch(setTokens(resp.access_token));
      return resp;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);