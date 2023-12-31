import { titleProp } from "../../shared/assets/lib/titleProp";
import { SubtitleCard } from "../SubtitleCard/SubtitleCard";

export const TitleCard = ({ subtitles, title }: titleProp) => {
    return <div className="mg">
        <div >{title}</div>
        <ul className="ul-1" >
            {subtitles.map((subtitle) => <SubtitleCard {...subtitle} key={subtitle.name}/>)}
        </ul>
    </div>
};
