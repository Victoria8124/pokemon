import { createSlice } from "@reduxjs/toolkit";
import type { MoneyState } from "../../type/type";

const initialState: MoneyState = {
  balance: Number(localStorage.getItem('balance')) | 0,
};

const moneySlice = createSlice({
    name: "money",
    initialState,
    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
            localStorage.setItem("balance", String(state.balance));
        },
        removeMoney: (state, action) => {
            state.balance -= action.payload;
            localStorage.setItem("balance", String(state.balance));
        }
    } 
});

export const { addMoney, removeMoney } = moneySlice.actions;
export default moneySlice.reducer;
