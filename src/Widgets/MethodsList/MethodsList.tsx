import { methodsProp } from "../../shared/assets/lib/methodsProp"
import { MethodCard } from "../../features/MethodCard/MethodCard"

import './MethodsList.scss'

export const MethodsList = ({ method_list }: methodsProp) => {
    return <section className="section">
        {method_list.map((method) => <MethodCard subtitles={method.subtitles} title={method.title} key={method.title}/>)}
    </section>
}