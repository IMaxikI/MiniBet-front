import {createSlice} from "@reduxjs/toolkit";
import {kralbetApi} from "../api/kralbetApi";

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: [],
    reducers: {
        setTournaments: (state, action) => {
            return action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                kralbetApi.endpoints.getKralbetData.matchFulfilled,
                (state, action) => {
                    return  action.payload.tournaments;
                }
            );
    }
});

export const {setTournaments} = tournamentsSlice.actions;
export default tournamentsSlice.reducer;