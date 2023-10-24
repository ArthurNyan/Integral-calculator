import "./Header.scss"

const Header = () => {
    return <header className="h">
        <nav className="nav" >
            <a className="logo" href="/">
                <img src="../logo.svg" className="img" alt="Логотип герцена" />
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