import "./Header.scss"

const Header = () => {
    return <header className="h">
        <nav className="nav">
            <div>
                {/* <img src="../assets/Протсой_лого_для_темного.png" alt="Логотип герцена" /> */}
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