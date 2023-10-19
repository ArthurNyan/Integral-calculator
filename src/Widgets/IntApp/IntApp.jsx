import React from "react"
import './IntApp.scss'
import { useDispatch } from "react-redux"
import { updateA, updateB, updateInteg } from "../../app/slice2"


const IntApp = ( a, b ) => {

    const dispatch = useDispatch();
    return <div className="container">
        <div>
            <input placeholder="a" type="number" name="text" id='inputA' className="input inp-2" onChange={()=>{dispatch(updateA(document.getElementById('inputA').value))}}/>
        </div>
        <div className="int-base">
            <img src="../../../public/integral.svg" alt="integral" className="img_int" />
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" id='inputInteg' className="input" onChange={()=>{dispatch(updateB(document.getElementById('inputInteg').value))}} />
            <span>=</span>
            <div className="inp-3">Ответ</div>
        </div>
        <div>
            <input placeholder="b" type="number" name="text" id='inputB' className="input inp-2" onChange={()=>{dispatch(updateInteg(document.getElementById('inputB').value))}}/>
        </div>
        <div>
            <button className="but-1">
                Найти
            </button>
        </div>
    </div>
}

export default IntApp