import { HerzenIcon } from "../../shared/assets/icons/HerzenIcon"
import "./Header.scss"

const Header = () => {
    return <header className="h">
        <nav className="nav" >
            <a className="logo" href="/">
                <div className="img">
                    <HerzenIcon />
                </div>
                <div>Герценовский калькулятор</div>
            </a>
            <ul className="ul">
                <li className="li"><a href="/" className="link-head">Главная</a></li>
                <li><a href="author" className="link-head">Авторы</a></li>
            </ul>
        </nav>
    </header>
}

export default Header