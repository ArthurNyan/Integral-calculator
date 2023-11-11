import CardList from "../../Widgets/CardList/CardList"
import IntApp from "../../Widgets/IntApp/IntApp";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

const HomePage = () => {
    const pageState = useSelector((state: RootState) => state.intState.endpoint)

    return <>
        {(pageState === '') ? <CardList /> : <IntApp />}
    </>
}

export default HomePage
