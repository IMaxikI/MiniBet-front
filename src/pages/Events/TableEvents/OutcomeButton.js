import style from "../Events.module.scss";

export default function OutcomeButton({outcome, isSelected, onClick}) {
    return (
        <td className={style.columnOdds}>
            <button
                className={style.outcomeBtn + ' ' + (isSelected ? style.selectedOutcomeBtn : '')}
                onClick={() => onClick(outcome)}
            >
                {outcome.odds}
            </button>
        </td>
    );
}