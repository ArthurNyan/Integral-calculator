import { useDispatch, useSelector } from "react-redux";
import { IntegralIcon } from "../../shared/assets/icons/Integral";
import { RootState } from "../../app/store/store";
import { updateResult, updateValue } from "../../app/store/intSlice";
import { FormParams } from "../../shared/assets/lib/formParams";

export const DefureEqual = ({ preParams, postParams, activeDef = false, double = false }: FormParams) => {
    const intState = useSelector((state: RootState) => state.intState.value);
    const endpoit = useSelector((state: RootState) => state.pageState.value.endpoit);
    const dispatch = useDispatch();
    return <div className="container">
        {preParams && <>
            {preParams.split('').map((param) => <input placeholder={param} key={param} type="number" name="text" id={`input${param}`} className="input inp-2"
                onChange={() => { dispatch(updateValue({ [param]: Number((document.getElementById(`input${param}`) as HTMLInputElement).value) })) }} />)}
        </>}
        <div className="int-base">
            {activeDef ?
                <>
                    {double && <span>d</span>}
                    <span>d(y)</span>
                    <span>=</span>
                </> :
                <>
                    <IntegralIcon />
                    {double && <IntegralIcon />}
                </>
            }
            <input placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation' className="input"
                onChange={() => { dispatch(updateValue({ equation: String((document.getElementById('equation') as HTMLInputElement).value) })) }} />
            <span>=</span>
            <div id='result' className="inp-3">{intState.result}</div>
        </div>
        {postParams && <>
            {postParams.split('').map((param) => <input
                placeholder={param}
                key={param}
                type="number"
                name="text"
                id={`input${param}`} className="input inp-2"
                onChange={() => { dispatch(updateValue({ [param]: Number((document.getElementById(`input${param}`) as HTMLInputElement).value) })) }} />)}
        </>}
        <button className="but-1" onClick={() => { dispatch(updateResult(endpoit)) }}>
            Найти
        </button>
    </div>
}

