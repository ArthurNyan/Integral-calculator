import { useDispatch } from "react-redux";
import { subtitleProp } from "../../shared/assets/lib/subtitleProp"
import { updateEndPoint } from "../../app/store/intSlice";

export const SubtitleCard = ({ attribute, name }: subtitleProp) => {
    const dispatch = useDispatch();
    return <li>
        <a
            onClick={
                () => dispatch(updateEndPoint(attribute))}
        >
            {name}
        </a>
    </li>
}