import style from './Cart.module.scss';
import * as Tabs from '@radix-ui/react-tabs';
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedOutcomes} from "../../redux/selectors/selectors";
import EmptyCart from "./EmptyCart";
import {useState, useEffect} from "react";
import CartOutcome from "./CartOutcome";
import Payout from "./Payout";
import {payoutCalculations} from "../../service/cartService";
import Combinations from "./Combinations";
import {clearOutcomes} from "../../redux/slices/selectedOutcomesSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const selectedOutcomes = useSelector(selectSelectedOutcomes);
    const outcomesLength = selectedOutcomes.length;
    const [selectedTab, setSelectedTab] = useState('');
    const [totalStake, setTotalStake] = useState(0);
    const [checkedCombination, setCheckedCombination] = useState([]);

    useEffect(() => {
        if ((selectedTab === 'single' && outcomesLength > 1) || (selectedTab === 'system' && outcomesLength < 3)) {
            setSelectedTab('parlay');
        }

        if (outcomesLength === 1) {
            setSelectedTab('single');
        }
    }, [outcomesLength, selectedTab]);

    useEffect(() => {
        setCheckedCombination([]);
    }, [outcomesLength]);

    if (!outcomesLength) {
        return <EmptyCart/>;
    }

    const handleClearCart = () => {
        dispatch(clearOutcomes());
    }

    const payout = payoutCalculations(selectedOutcomes, selectedTab, totalStake, checkedCombination);

    return (
        <div className={style.cartWrapper}>
            <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
                <Tabs.List className={style.tabsList}>
                    <Tabs.Trigger value={'single'} disabled={outcomesLength > 1}>Single</Tabs.Trigger>
                    <Tabs.Trigger value={'parlay'} disabled={outcomesLength < 2}>Parlay</Tabs.Trigger>
                    <Tabs.Trigger value={'system'} disabled={outcomesLength < 3}>System</Tabs.Trigger>
                </Tabs.List>

                <div>
                    {selectedOutcomes.map(outcome => (
                        <CartOutcome key={outcome.outcome_id} outcome={outcome}/>
                    ))}
                </div>

                <Payout totalStack={totalStake} setTotalStack={setTotalStake} payout={payout} selectedTab={selectedTab}/>

                <Tabs.Content value={'system'}>
                    <Combinations outcomes={selectedOutcomes} checkedCombination={checkedCombination} setCheckedCombination={setCheckedCombination}/>
                </Tabs.Content>
            </Tabs.Root>

            <div className={style.cartBtns}>
                <button className={style.placeBtn}>Place bet</button>
                <button className={style.deleteBtn} onClick={handleClearCart}>Delete</button>
            </div>
        </div>
    );
}
