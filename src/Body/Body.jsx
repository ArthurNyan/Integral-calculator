import "./Body.scss"

const Body = () => {
    return <section className="section">
        <div className="first-section">
            <div className="block-1">Интеграл</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li>С двойной проверкаой</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </div>

            <div className="mg">
                <div >Постоянный шаг</div>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </div>
            <div className="mg">
                <div>Кратное</div>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
            </div>
        </div>
        <div className="first-section">
            <div className="block-1">Дифференциал</div>
            <div className="mg">
                <div>Переменный шаг</div>
                <ul className="ul-1">
                    <li>С двойной проверкаой</li>
                    <li>Lorem ipsum dolor sit amet </li>
                </ul>
            </div>

            <div className="mg">
                <div >Тоже шаг</div>
                <ul>
                    <li>Треугольник какой-то</li>
                </ul>
            </div>
            <div className="mg">
                <div>Кратное</div>
                <ul>
                    <li>Кратный тругольник</li>
                    <li>Квадратный треугольник</li>
                </ul>
            </div>
        </div>
    </section>
}

export default Body
