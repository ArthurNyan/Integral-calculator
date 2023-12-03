import { DefureEqual } from '../DefureEqual/DefureEqual';
import { FormParams } from '../../shared/assets/lib/formParams';
import './IntApp.scss';

const IntApp = (params: FormParams) => {
    return <>
        <DefureEqual {...params} />
    </>
}

export default IntApp