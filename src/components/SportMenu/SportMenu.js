import style from "./SportMenu.module.scss";
import SportMenuItem from "./SportMenuItem";
import {useSelector} from "react-redux";
import {selectSports} from "../../redux/selectors/selectors";

export default function SportMenu() {
    const sports = useSelector(selectSports);

    return (
        <>
            <div className={style.title}>Sport Betting</div>
            <div>
                <menu className={style.sportMenu}>
                    <ul>
                        {sports.map(sport => <SportMenuItem key={sport.sport_id} sport={sport}/>)}
                    </ul>
                </menu>
            </div>
        </>
    );
}