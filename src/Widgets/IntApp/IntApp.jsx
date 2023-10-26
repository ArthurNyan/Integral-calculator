import React from "react"
import './IntApp.scss'
import { useDispatch, useSelector } from "react-redux"
import { updateA, updateB, updateC, updateD, updateE, updateInteg, updateN, updateResult } from "../../app/store/intSlice"


const IntApp = (a, b) => {
    const intState = useSelector((state) => state.intState)
    const dispatch = useDispatch();
    return <div className="container">
        <div>
            <input placeholder="b" type="number" name="text" id='inputB' className="input inp-2" onChange={() => { dispatch(updateB(Number(document.getElementById('inputB').value))) }} />
            <input placeholder="n" type="number" name="text" id='inputN' className="input inp-2" onChange={() => { dispatch(updateN(Number(document.getElementById('inputN').value))) }} />
            {intState.endpoint === 'even_alg' &&
                <input placeholder="d" type="number" name="text" id='inputD' className="input inp-2" onChange={() => { dispatch(updateD(Number(document.getElementById('inputD').value))) }} />}
            {(intState.endpoint === 'triple_step') &&
                <input placeholder="e" type="number" name="text" id='inputE' className="input inp-2" onChange={() => { dispatch(updateE(Number(document.getElementById('inputE').value))) }} />}
            {(intState.endpoint === 'double_step') &&
                <input placeholder="e" type="number" name="text" id='inputE' className="input inp-2" onChange={() => { dispatch(updateE(Number(document.getElementById('inputE').value))) }} />}
        </div>
        <div className="int-base">
            {intState.endpoint === 'even_alg' && <img src="../../../public/integral.svg" alt="integral" className="img_int" />}
            <img src="../../../public/integral.svg" alt="integral" className="img_int" />
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" id='inputInteg' className="input" onChange={() => { dispatch(updateInteg(document.getElementById('inputInteg').value)) }} />
            <span>=</span>
            <div id='result' className="inp-3">{intState.value.result}</div>
        </div>
        <div>
            <input placeholder="a" type="number" name="text" id='inputA' className="input inp-2" onChange={() => { dispatch(updateA(Number(document.getElementById('inputA').value))) }} />
            {intState.endpoint === 'even_alg' &&
                <input placeholder="c" type="number" name="text" id='inputC' className="input inp-2" onChange={() => { dispatch(updateC(Number(document.getElementById('inputC').value))) }} />}
        </div>
        <div>
            <button className="but-1" onClick={() => { dispatch(updateResult()) }}>
                Найти
            </button>
        </div>
    </div>
}

export default IntApp