import {configureStore} from "@reduxjs/toolkit";
import sportsReducer from './slices/sportsSlice';
import countriesReducer from './slices/countriesSlice';
import tournamentsReducer from './slices/tournamentsSlice';
import selectedOutcomesReducer from "./slices/selectedOutcomesSlice";
import randomTournamentsReducer from "./slices/randomTournamentsSlice";
import {kralbetApi} from "./api/kralbetApi";

export const store = configureStore({
    reducer: {
        sports: sportsReducer,
        countries: countriesReducer,
        tournaments: tournamentsReducer,
        selectedOutcomes: selectedOutcomesReducer,
        randomTournaments: randomTournamentsReducer,
        [kralbetApi.reducerPath]: kralbetApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kralbetApi.middleware)
});