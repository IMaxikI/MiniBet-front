import {useSelector} from "react-redux";
import {selectRandomTournaments} from "../../redux/selectors/selectors";
import * as Accordion from "@radix-ui/react-accordion";
import style from "../Events/Events.module.scss";
import {IoIosArrowDown} from "react-icons/io";
import TableEvents from "../Events/TableEvents/TableEvents";

export default function Home() {
    const tournaments = useSelector(selectRandomTournaments);

    return (
        <div>
            <h2>Random Events</h2>
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