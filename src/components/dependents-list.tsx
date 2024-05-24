import DependentCost from './dependent-cost';

import type { Dependent } from '../types/people';

type Props = { dependents: Dependent[] };

const DependentsList = ({ dependents }: Props) => {
    const addDependent = () => {
        dependents.push({ name: '' });
    };

    return <>
        <h3>Dependents</h3>
        <table>
            <tr>
                <td>Name</td>
                <td>Cost</td>
            </tr>
            {dependents.map(dependent => <DependentCost dependent={dependent} />)}
        </table>

        <button onClick={addDependent}>Add dependent</button>

        <div>Total dependents benefits cost: $xx.xx</div>
    </>
};

export default DependentsList;
