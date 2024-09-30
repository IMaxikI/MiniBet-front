import style from './SportMenu.module.scss';
import {NavLink} from "react-router-dom";

export default function SportMenuItem({sport}) {
    return (
        <li>
            <NavLink to={`/tournaments/${sport.sport_id}`} className={style.itemBtn}>
                    <div>{sport.sport_name}</div>
                    <div>{sport.count}</div>
            </NavLink>
        </li>
    );
}