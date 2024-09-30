import style from './Cart.module.scss';
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {removeOutcome} from "../../redux/slices/selectedOutcomesSlice";

export default function CartOutcome({outcome}) {
    const dispatch = useDispatch();

    const handleRemoveOutcome = () => {
        dispatch(removeOutcome(outcome));
    }

    return (
        <div className={style.cartOutcome}>
            <div className={style.cartEvent}>
                <div>{outcome.event_name}</div>
                <div className={style.matchOdds}>
                    <div>
                        <div className={style.type}>Match Odds</div>
                        <div>Wager: {outcome.type === 'X' ? 'Draw' : outcome.type}</div>
                    </div>
                    <div className={style.odds}>
                        {outcome.odds}
                    </div>
                </div>
            </div>
            <div className={style.rmOutcome} onClick={handleRemoveOutcome}>
                <AiOutlineClose/>
            </div>
        </div>
    );
}