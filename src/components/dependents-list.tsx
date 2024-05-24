import DependentCost from './dependent-cost';

import type { Dependent } from '../types/people';

type Props = { dependents: Dependent[] };

const DependentsList = ({ dependents }: Props) => {
    return <>
        <h3>Dependents</h3>
        <table>
            <tr>
                <td>Name</td>
                <td>Cost</td>
            </tr>
            {dependents.map(dependent => <DependentCost dependent={dependent} />)}
        </table>

        <button>Add dependent</button>

        <div>Total dependents benefits cost: $xx.xx</div>
    </>
};

export default DependentsList;
