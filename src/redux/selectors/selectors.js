export const selectTournaments = (state) => state.tournaments;

export const selectTournamentsBySportId = (sportId) => (state) => {
    const filteredTournaments = state.tournaments.filter(tournament => tournament.sport_id === sportId);

    return filteredTournaments.reduce((acc, tournament) => {
        const {country_id} = tournament;

        if (!acc[country_id]) {
            acc[country_id] = [];
        }

        acc[country_id].push(tournament);

        return acc;
    }, {});
};

export const selectTournamentsByIds = (ids) => (state) => {
    return state.tournaments.filter(tournament => ids.includes(tournament.tournament_id));
};

export const selectCountries = (state) => state.countries;

export const selectSports = (state) => state.sports;

export const selectSelectedOutcomes = (state) => state.selectedOutcomes;

export const selectRandomTournaments = (state) => state.randomTournaments;
