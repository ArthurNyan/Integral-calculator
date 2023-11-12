import IntApp from "../../Widgets/IntApp/IntApp";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { MethodsList } from "../../Widgets/MethodsList/MethodsList";
import { methodsData } from "../../shared/data/methodsData";

const HomePage = () => {
    const pageState = useSelector((state: RootState) => state.intState.endpoint)

    return <>
        {(pageState === '') ? <MethodsList method_list={methodsData} /> : <IntApp />}
    </>
}

export default HomePage
