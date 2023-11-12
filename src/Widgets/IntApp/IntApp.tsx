import './IntApp.scss'
import { useDispatch, useSelector } from "react-redux"
import { updateA, updateB, updateC, updateD, updateE, updateInteg, updateN, updateResult } from "../../app/store/intSlice"
import { RootState } from "../../app/store/store"
import { IntegralIcon } from '../../shared/assets/icons/Integral'


const IntApp = () => {
    const intState = useSelector((state: RootState) => state.intState)
    const dispatch = useDispatch();
    return <div className="container">
        <div>
            <input placeholder="b" type="number" name="text" id='inputB' className="input inp-2" onChange={() => { dispatch(updateB(Number((document.getElementById('inputB') as HTMLInputElement).value))) }} />
            <input placeholder="n" type="number" name="text" id='inputN' className="input inp-2" onChange={() => { dispatch(updateN(Number((document.getElementById('inputN') as HTMLInputElement).value))) }} />
            {intState.endpoint === 'even_alg' &&
                <input placeholder="d" type="number" name="text" id='inputD' className="input inp-2" onChange={() => { dispatch(updateD(Number((document.getElementById('inputD') as HTMLInputElement).value))) }} />}
            {(intState.endpoint === 'triple_step') &&
                <input placeholder="e" type="number" name="text" id='inputE' className="input inp-2" onChange={() => { dispatch(updateE(Number((document.getElementById('inputE') as HTMLInputElement).value))) }} />}
            {(intState.endpoint === 'double_step') &&
                <input placeholder="e" type="number" name="text" id='inputE' className="input inp-2" onChange={() => { dispatch(updateE(Number((document.getElementById('inputE') as HTMLInputElement).value))) }} />}
        </div>
        <div className="int-base">
            {intState.endpoint === 'even_alg' && <IntegralIcon />}
            <IntegralIcon />
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" id='inputInteg' className="input" onChange={() => { dispatch(updateInteg((document.getElementById('inputInteg') as HTMLInputElement).value)) }} />
            <span>=</span>
            <div id='result' className="inp-3">{intState.value.result}</div>
        </div>
        <div>
            <input placeholder="a" type="number" name="text" id='inputA' className="input inp-2" onChange={() => { dispatch(updateA(Number((document.getElementById('inputA') as HTMLInputElement).value))) }} />
            {intState.endpoint === 'even_alg' &&
                <input placeholder="c" type="number" name="text" id='inputC' className="input inp-2" onChange={() => { dispatch(updateC(Number((document.getElementById('inputC') as HTMLInputElement).value))) }} />}
        </div>
        <div>
            <button className="but-1" onClick={() => { dispatch(updateResult()) }}>
                Найти
            </button>
        </div>
    </div>
}

export default IntApp