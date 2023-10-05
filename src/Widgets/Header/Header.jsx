import "./Header.scss"

const Header = () => {
    return <header className="h">
        <nav className="nav">
            <div className="logo">
                <img src="../public/logo.svg" className="img" alt="Логотип герцена" />
                <div>Герценовский калькулятор</div>
            </div>
            <ul className="ul">
                <li className="li"><button>Главная</button></li>
                <li><button>Авторы</button></li>
            </ul>
        </nav>
    </header>
}

export default Header