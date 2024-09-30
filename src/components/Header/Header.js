import style from './Header.module.scss'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={style.header}>
            <h1>
                <Link to={'/'}>👑MINIBET👑</Link>
            </h1>
        </div>
    )
}