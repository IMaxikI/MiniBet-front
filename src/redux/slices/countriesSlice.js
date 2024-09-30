import {createSlice} from "@reduxjs/toolkit";
import {kralbetApi} from "../api/kralbetApi";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: [],
    reducers: {
        setCountries: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                kralbetApi.endpoints.getKralbetData.matchFulfilled,
                (state, action) => {
                    return action.payload.countries;
                }
            );
    }
});

export const {setCountries} = countriesSlice.actions;
export default countriesSlice.reducer;