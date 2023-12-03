import { DefureEqual } from '../DefureEqual/DefureEqual';
import { FormParams } from '../../shared/assets/lib/formParams';
import './IntApp.scss';

const IntApp = ({ postParams, preParams, activeDef, double, thirdSistem }: FormParams) => {
    return <>
        <DefureEqual postParams={postParams} preParams={preParams} activeDef={activeDef} double={double} thirdSistem={thirdSistem}/>
    </>
}

export default IntApp