import React from "react"
import './IntApp.scss'

const IntApp = ({ a, b }: { a?: number, b?: number }) => {
    return <div className="container">
        <div>
            <input placeholder="a" type="text" name="text" className="input inp-2" />
        </div>
        <div className="int-base">
            <img src="../../../public/integral.svg" alt="integral" className="img_int" />
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" className="input" />
            <span>=</span>
            <div className="inp-3">Ответ</div>
        </div>
        <div>
            <input placeholder="b" type="text" name="text" className="input inp-2" />
        </div>
        <div>
            <button className="but-1">
                Найти
            </button>
        </div>
    </div>
}

export default IntApp