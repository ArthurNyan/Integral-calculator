import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

export const TableResult = () => {

    const data = useSelector((state: RootState) => state.intState.value.resultOb);
    return (
        <>
            <section>
                <h4>Results table</h4>
                <div className="tbl-header">
                    <table cellPadding={0} cellSpacing="0" border={0}>
                        <thead>
                            <tr>
                                <th>n</th>
                                <th>y(n)</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border={0}>
                        <tbody>
                            {data.map((res) => {
                                return <tr key={res.x}><td>{res.x}</td><td>{res.y}</td></tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
