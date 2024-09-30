import {createSlice} from '@reduxjs/toolkit';
import {kralbetApi} from "../api/kralbetApi";

const randomTournamentsSlice = createSlice({
    name: 'randomTournaments',
    initialState: [],
    reducers: {
        setRandomTournaments: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                kralbetApi.endpoints.getKralbetData.matchFulfilled,
                (state, action) => {
                    const tournaments = action.payload.tournaments;
                    const randomTournaments = [];

                    if (tournaments.length <= 5) {
                        return tournaments;
                    }

                    const usedIndexes = new Set();

                    while (randomTournaments.length < 5) {
                        const randomIndex = Math.floor(Math.random() * tournaments.length);

                        if (!usedIndexes.has(randomIndex)) {
                            randomTournaments.push(tournaments[randomIndex]);
                            usedIndexes.add(randomIndex);
                        }
                    }

                    return randomTournaments;
                }
            );
    }
});

export const {setRandomTournaments} = randomTournamentsSlice.actions;
export default randomTournamentsSlice.reducer;
