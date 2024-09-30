import OutcomeButton from "./OutcomeButton";
import {extractDateTime} from "../../../service/eventService";

export default function EventRow({event, tournament, isOutcomeSelected, onOutcomeClick}) {
    const market = event.markets.find(market => market.market_type === '1x2' && market.scope_type === 'full_event');

    if (!market) {
        return null;
    }

    const outcomes = [
        {...market.outcomes[0], type: '1'},
        {...market.outcomes[1], type: 'X'},
        {...market.outcomes[2], type: '2'}
    ];

    return (
        <tr>
            <td>{extractDateTime(event.event_start_time)}</td>
            <td>{event.event_name}</td>
            {
                outcomes.map(outcome => (
                    <OutcomeButton
                        key={outcome.outcome_id}
                        outcome={{
                            ...outcome,
                            event_name: event.event_name,
                            event_id: event.event_id,
                            tournament_id: tournament.tournament_id
                        }}
                        isSelected={isOutcomeSelected(outcome.outcome_id)}
                        onClick={onOutcomeClick}
                    />
                ))
            }
        </tr>
    );
}