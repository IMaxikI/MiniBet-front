import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import * as Accordion from '@radix-ui/react-accordion';
import {selectTournamentsByIds} from "../../redux/selectors/selectors";
import style from "./Events.module.scss";
import TableEvents from "./TableEvents/TableEvents";
import {IoIosArrowDown} from "react-icons/io";

export default function Events() {
    const {tournamentIds} = useParams();
    const ids = tournamentIds.split(',');

    const tournaments = useSelector(selectTournamentsByIds(ids));

    return (
        <div>
            <h2>Events</h2>
            <Accordion.Root type={"multiple"}>
                {tournaments.map(tournament => (
                    <Accordion.Item className={style.accItem} value={tournament.tournament_id}
                                    key={tournament.tournament_id}>
                        <Accordion.Header className={style.accHeader}>
                            <Accordion.Trigger>
                                {tournament.sport_name} - {tournament.country_name} - {tournament.tournament_name}
                                <IoIosArrowDown/>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <TableEvents key={tournament.tournament_id} tournament={tournament}/>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}