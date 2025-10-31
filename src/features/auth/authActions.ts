import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser, IAuthResponse } from "../../entities/auth/model/authTypes";
import { AuthService } from "./AuthService";

export const login = createAsyncThunk<IAuthResponse, IUser>(
  "auth/login",
  async (user, {  rejectWithValue }) => {
    try {
      const resp = await AuthService.login(user);
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
  async (user, { rejectWithValue }) => {
    try {
      const resp = await AuthService.registration(user);
      return resp;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
