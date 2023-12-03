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
                                return <tr key={res.y}>
                                    <td>{res.x}</td>
                                    <td>{res.y}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export const SisTableResult = () => {

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
                                <th>x(n)</th>
                                <th>y(n)</th>
                                <th>z(n)</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border={0}>
                        <tbody>
                            {data.map((res) => {
                                return <tr key={res.x}>
                                    <td>{res.t}</td>
                                    <td>{res.x}</td>
                                    <td>{res.y}</td>
                                    <td>{res.z}</td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
