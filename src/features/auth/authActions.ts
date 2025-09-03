// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = "https://cafe-admin-api-production.up.railway.app";

// export const registration = createAsyncThunk(
//   "auth/registration",
//   async (
//     { email, password }: { email: string; password: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       await axios.post(`${API_URL}/auth/sign-up`, { email, password }, config);
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
