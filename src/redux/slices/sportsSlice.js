import {createSlice} from "@reduxjs/toolkit";
import {kralbetApi} from "../api/kralbetApi";

const sportsSlice = createSlice({
    name: 'sports',
    initialState: [],
    reducers: {
        setSports: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                kralbetApi.endpoints.getKralbetData.matchFulfilled,
                (state, action) => {
                    return action.payload.sports;
                }
            );
    }
});

export const {setSports} = sportsSlice.actions;
export default sportsSlice.reducer;