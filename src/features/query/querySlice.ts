import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import {searchQuery} from './queryActions'
import type { QueryState } from '../../type/type'

const initialState: QueryState = {
    queryItems: [],
}

const querySlice = createSlice({
    name: 'queryItems',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
     builder.addCase(searchQuery.fulfilled, (state, action) => {
        state.queryItems = action.payload
     });
    }
})


export default querySlice.reducer;

export const selectQuery = (state: RootState) => state.query.queryItems;