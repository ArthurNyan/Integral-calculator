import React from "react"
import './IntApp.scss'
import { inputValidB, inputValidA, inputValidInt } from "./functions"

const IntApp = ({ a, b }: { a?: number, b?: number }) => {

    return <div className="container">
        <div>
            <input placeholder="a" type="number" name="text" id='inputA' className="input inp-2" onChange={()=>{inputValidA()}}/>
        </div>
        <div className="int-base">
            <img src="../../../public/integral.svg" alt="integral" className="img_int" />
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" id='inputInteg' className="input" onChange={()=>{inputValidInt()}} />
            <span>=</span>
            <div className="inp-3">Ответ</div>
        </div>
        <div>
            <input placeholder="b" type="number" name="text" id='inputB' className="input inp-2" onChange={()=>{inputValidB()}}/>
        </div>
        <div>
            <button className="but-1">
                Найти
            </button>
        </div>
    </div>
}

export default IntApp