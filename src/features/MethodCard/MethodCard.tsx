import { methodProp } from "../../shared/assets/lib/methodProp"
import { TitleCard } from "../TitleCard/TitleCard"

export const MethodCard = ({ title, subtitles }: methodProp) => {
    return <div className="card-section">
        <div className="block-1">{title}</div>
        {subtitles.map((title) => <TitleCard subtitles={title.subtitles} title={title.title} />)}
    </div >

}