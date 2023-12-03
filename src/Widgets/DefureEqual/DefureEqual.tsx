import { useDispatch, useSelector } from "react-redux";
import { IntegralIcon } from "../../shared/assets/icons/Integral";
import { RootState } from "../../app/store/store";
import { updateResult, updateValue } from "../../app/store/intSlice";
import { FormParams } from "../../shared/assets/lib/formParams";
import { TableResult } from "../../features/TableResult/TableResult";
import { useState } from "react";
import { Canvas } from "../../features/Canvas/Canvas";
import { TextField } from "../../features/TextField/TextField";

export const DefureEqual = ({ preParams, postParams, activeDef = false, double = false }: FormParams) => {
    const [state, setState] = useState<boolean>();
    const intState = useSelector((state: RootState) => state.intState.value);
    const endpoit = useSelector((state: RootState) => state.pageState.value.endpoit);
    const dispatch = useDispatch();

    return <div className="container">
        {preParams && <TextField params={preParams} />}
        <div className="int-base">
            {
                activeDef ?
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
            <input required placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation' className="input"
                onChange={() => { dispatch(updateValue({ equation: String((document.getElementById('equation') as HTMLInputElement).value) })) }} />
            {
                !activeDef && <>
                    <span>=</span>
                    <div id='result' className="inp-3">{intState.result}</div>
                </>
            }
        </div>
        {
            postParams && <>
                <TextField params={postParams} />
            </>
        }
        <button type="submit"
            className="but-1"
            onClick={() => { dispatch(updateResult(endpoit)); setState(true) }}
        >
            Найти
        </button>
        {
            activeDef && state && <>
                <TableResult />
                <Canvas />
            </>
        }
    </div>
}

