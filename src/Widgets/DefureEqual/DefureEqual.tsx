import { useDispatch, useSelector } from "react-redux";
import { IntegralIcon } from "../../shared/assets/icons/Integral";
import { RootState } from "../../app/store/store";
import { updateResult, updateValue } from "../../app/store/intSlice";
import { FormParams } from "../../shared/assets/lib/formParams";
import { SisTableResult, TableResult } from "../../features/TableResult/TableResult";
import { useState } from "react";
import { Canvas, SisCanvas } from "../../features/Canvas/Canvas";
import { TextField } from "../../features/TextField/TextField";

export const DefureEqual = ({ preParams, postParams, activeDef = false, double = false, thirdSistem = false }: FormParams) => {
    const [state, setState] = useState<boolean>();
    const intState = useSelector((state: RootState) => state.intState.value);
    const endpoit = useSelector((state: RootState) => state.pageState.value.endpoit);
    const dispatch = useDispatch();

    return <div className="container">
        {preParams && <TextField params={preParams} />}
        <div className="int-base">
            {
                thirdSistem &&
                <>
                    <div className="sitsem">&#9128;</div>
                    <div>
                        <div>
                            <span>dx/dt</span>
                            <span>=</span>
                            <input required placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation' className="input"
                                onChange={() => { dispatch(updateValue({ equation: String((document.getElementById('equation') as HTMLInputElement).value) })) }} />
                        </div>
                        <div>
                            <span>dy/dt</span>
                            <span>=</span>
                            <input required placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation2' className="input"
                                onChange={() => { dispatch(updateValue({ equation2: String((document.getElementById('equation2') as HTMLInputElement).value) })) }} />
                        </div>
                        <div>
                            <span>dz/dt</span>
                            <span>=</span>
                            <input required placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation3' className="input"
                                onChange={() => { dispatch(updateValue({ equation3: String((document.getElementById('equation3') as HTMLInputElement).value) })) }} />
                        </div>
                    </div>
                </>
            }
            {
                !thirdSistem && (activeDef ?
                    <>
                        {double && <span>d</span>}
                        <span>d(y)</span>
                        <span>=</span>
                    </> :
                    <>
                        <IntegralIcon />
                        {double && <IntegralIcon />}
                    </>)
            }
            {
                !thirdSistem &&
                <input required placeholder="Введите подинтегральное выражение" type="text" name="text" id='equation' className="input"
                    onChange={() => { dispatch(updateValue({ equation: String((document.getElementById('equation') as HTMLInputElement).value) })) }} />
            }
            {
                !thirdSistem && (!activeDef && <>
                    <span>=</span>
                    <div id='result' className="inp-3">{intState.result}</div>
                </>)
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
        {
            thirdSistem && state && <>
                <SisTableResult />
                <SisCanvas />
            </>
        }
    </div>
}

