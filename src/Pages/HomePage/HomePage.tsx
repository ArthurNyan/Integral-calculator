import IntApp from "../../Widgets/IntApp/IntApp";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { MethodsList } from "../../Widgets/MethodsList/MethodsList";
import { methodsData } from "../../shared/data/methodsData";
import '../../Widgets/IntApp/IntApp.scss';



const HomePage = () => {
    const pageState = useSelector((state: RootState) => state.pageState.value)
    return <>
        {(pageState.endpoit === '') ? <MethodsList method_list={methodsData} /> : <IntApp {...pageState} />}
    </>
}

export default HomePage
