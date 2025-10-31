import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { queryService } from "../query/queryService";
import type { DetailedItem } from "../../entities/query/model/queryTypes";

export const searchQuery = createAsyncThunk<
  DetailedItem[],
  string,
  { rejectValue: string }
>("query/serchQuery", async (query, { rejectWithValue }) => {
  try {
    const res = await queryService.getItems(query);
    if (!res) {
      return rejectWithValue("Ошибка при загрузке");
    }
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("different error than axios");
    }
  }
});
