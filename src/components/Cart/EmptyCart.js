import style from "./Cart.module.scss";

export default function EmptyCart() {
    return (
        <div className={style.emptyCart}>
            <h3>Click on the odds to start with the bet</h3>
            <img src='/empty_cart.webp'/>
        </div>
    );
}