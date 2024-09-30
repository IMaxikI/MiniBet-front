import Checkbox from "../Checkbox/Checkbox";
import style from "./Cart.module.scss";
import {combinationCount, generateCountCombination} from "../../service/cartService";
import {useMemo} from "react";

export default function Combinations({outcomes, checkedCombination, setCheckedCombination}) {
    const maxLenSystem = outcomes.length;
    const countCombinations =  useMemo(() => generateCountCombination(maxLenSystem), [maxLenSystem]);

    const handleChange = (event) => {
        const {value, checked} = event.target;

        setCheckedCombination(prevState => {
            if (!checked) {
                return prevState.filter(item => item !== +value);
            }

            return [...prevState, +value];
        })
    }

    return (
        <div className={style.combinationWrapper}>
            <div className={style.titleCombination}>
                Combinations count:
            </div>
            <div className={style.checkCombinations}>
                {countCombinations.map((item) => (
                    <Checkbox key={item}
                              label={`System ${item}/${maxLenSystem} - (${combinationCount(maxLenSystem, item)} Odds)`}
                              value={item}
                              checked={checkedCombination.includes(item) || false}
                              onChange={handleChange}
                    />
                ))}
            </div>
        </div>
    );
}