import style from './Layout.module.scss';
import SportMenu from "../SportMenu/SportMenu";
import {Outlet} from "react-router-dom";
import Cart from "../Cart/Cart";

export default function Layout() {
    return (
        <div className={style.layout}>
            <div className={style.leftSide}>
                <SportMenu/>
            </div>
            <div className={style.content}>
                <Outlet/>
            </div>
            <div className={style.rightSide}>
                <Cart/>
            </div>
        </div>
    );
}