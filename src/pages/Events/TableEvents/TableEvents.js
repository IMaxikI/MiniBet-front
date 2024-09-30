import style from '../Events.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedOutcomes} from "../../../redux/selectors/selectors";
import {addOutcome} from "../../../redux/slices/selectedOutcomesSlice";
import React from 'react';
import EventRow from "./EventRow";

export default function TableEvents({tournament}) {
    const dispatch = useDispatch();
    const selectedOutcomes = useSelector(selectSelectedOutcomes);

    const handleOutcomeClick = (outcome) => {
        dispatch(addOutcome(outcome));
    };

    const isOutcomeSelected = (outcome_id) => {
        return selectedOutcomes.some(outcome => outcome.outcome_id === outcome_id);
    };

    return (
        <table className={style.tableEvents}>
            <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
                <th>1</th>
                <th>X</th>
                <th>2</th>
            </tr>
            </thead>
            <tbody>
            {tournament.events.map(event => (
                <EventRow
                    key={event.event_id}
                    event={event}
                    tournament={tournament}
                    isOutcomeSelected={isOutcomeSelected}
                    onOutcomeClick={handleOutcomeClick}
                />
            ))}
            </tbody>
        </table>);
}