import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import style from "./Tournaments.module.scss";
import {selectTournamentsBySportId} from "../../redux/selectors/selectors";
import * as Accordion from '@radix-ui/react-accordion';
import Checkbox from "../../components/Checkbox/Checkbox";
import {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const MAX_CHECKED_ITEMS = 8;

export default function Tournaments() {
    const navigate = useNavigate();
    const {sportId} = useParams();
    const [checkedItems, setCheckedItems] = useState({});
    const tournaments = useSelector(selectTournamentsBySportId(sportId));
    const checkedItemsLength  = Object.keys(checkedItems).length;

    const handleChange = (event) => {
        const {value, checked} = event.target;

        if(checkedItemsLength === MAX_CHECKED_ITEMS && checked) return;

        setCheckedItems(prevState => {
            if (!checked) {
                const {[value]: _, ...rest} = prevState;
                return rest;
            }

            return {
                ...prevState,
                [value]: checked
            };
        });
    };

    const resetCheckedItem = () => {
        setCheckedItems({});
    }

    const handleSave = () => {
        const keys = Object.keys(checkedItems);

        if(keys.length) {
            navigate('/events/' + Object.keys(checkedItems).join(','));
        }
    };

    return (
        <div>
            <h2>Tournaments - {sportId}</h2>

            <div className={style.controlBtns}>
                <button className={style.retiredBtn} type="button" onClick={resetCheckedItem}>
                    Retired
                </button>
                <button className={style.makeBtn} type="button" onClick={handleSave}>
                    Make Coupon {checkedItemsLength}{checkedItemsLength === MAX_CHECKED_ITEMS ? ' (MAX)' : ''}
                </button>
            </div>

            <Accordion.Root type={"multiple"}>
                {Object.keys(tournaments).map(countryId => (
                        <Accordion.Item className={style.accItem} value={countryId} key={countryId}>
                            <Accordion.Header className={style.accHeader}>
                                <Accordion.Trigger>
                                    {countryId}
                                    <IoIosArrowDown/>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className={style.accContent}>
                                {tournaments[countryId].map(tournament => (
                                    <Checkbox key={tournament.tournament_id}
                                              value={tournament.tournament_id}
                                              label={tournament.tournament_name + ' (' + tournament.count + ')'}
                                              className={style.checkBoxWrapper}
                                              checked={checkedItems[tournament.tournament_id] || false}
                                              onChange={handleChange}
                                    />
                                ))}
                            </Accordion.Content>
                        </Accordion.Item>
                    )
                )}
            </Accordion.Root>
        </div>
    );
}