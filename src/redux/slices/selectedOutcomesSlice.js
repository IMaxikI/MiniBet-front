import {createSlice} from '@reduxjs/toolkit';

const selectedOutcomesSlice = createSlice({
    name: 'selectedOutcomes',
    initialState: [],
    reducers: {
        addOutcome: (state, action) => {
            const index = state.findIndex(
                (outcome) => outcome.event_id === action.payload.event_id
            );

            if (index === -1 && state.length < 13) {
                state.push(action.payload);
            } else if (state[index]?.outcome_id === action.payload.outcome_id) {
                state.splice(index, 1);
            } else {
                state[index] = action.payload;
            }
        },
        removeOutcome: (state, action) => {
            return state.filter(outcome => outcome.outcome_id !== action.payload.outcome_id);
        },
        clearOutcomes: (state) => {
            return [];
        },
    },
});

export const {addOutcome, removeOutcome, clearOutcomes} = selectedOutcomesSlice.actions;
export default selectedOutcomesSlice.reducer;
