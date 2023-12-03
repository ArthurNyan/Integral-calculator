import { useDispatch } from "react-redux";
import { subtitleProp } from "../../shared/assets/lib/subtitleProp"
import { updateState } from "../../app/store/pageSlice";

export const SubtitleCard = (params: subtitleProp) => {
    const dispatch = useDispatch();
    return <li>
        <a
            onClick={
                () => dispatch(updateState(params))

            }
        >
            {params.name}
        </a>
    </li>
}