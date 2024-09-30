import style from './Cart.module.scss';
import {LiaCoinsSolid} from "react-icons/lia";


export default function Payout({totalStack, setTotalStack, payout, selectedTab}) {
    return (
        <div>
            <div className={style.payout}>
                <div className={style.totalOdds}>
                    <div className={style.title}>Total odds:</div>
                    <div>{payout?.totalOdds}</div>
                </div>
                <div className={style.potential}>
                    <div className={style.title}>
                        {selectedTab === 'system' ? 'Total Stake:': 'Potential payout:'}
                    </div>
                    <div>{payout?.potentialPayout}</div>
                </div>
            </div>
            <div className={style.stake}>
                <div className={style.titleStake}>
                    <LiaCoinsSolid/> Total Stake:
                </div>
                <div className={style.inputStakeWrapper}>
                    <input className={style.inputStake} value={totalStack} type={"number"} min={0}
                           onChange={(e) => setTotalStack(e.target.value)}/>
                    <span className={style.currency}>$</span>
                </div>
            </div>
        </div>
    );
}