import { DefureEqual } from '../../features/DefureEqual/DefureEqual';
import { FormParams } from '../../shared/assets/lib/formParams';
import './IntApp.scss';

const IntApp = ({ postParams, preParams, activeDef, double }: FormParams) => {
    return <>
        <DefureEqual postParams={postParams} preParams={preParams} activeDef={activeDef} double={double} />
    </>
}

export default IntApp