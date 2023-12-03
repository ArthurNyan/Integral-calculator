import { useDispatch } from "react-redux";
import { updateValue } from "../../app/store/intSlice";

export const TextField = ({ params }: { params: string[] }) => {
    const dispatch = useDispatch();
    return (
        <>
            {params.map((param) => (
                <input
                    placeholder={param}
                    key={param}
                    type="number"
                    name="text"
                    id={`input${param}`}
                    className="input inp-2"
                    onChange={() => {
                        dispatch(
                            updateValue({
                                [param]: Number(
                                    (document.getElementById(`input${param}`) as HTMLInputElement).value
                                )
                            })
                        );
                    }}
                />
            ))}
        </>
    );
};
