import { calculateTotalDependentsCost } from '../lib/cost-calculator';
import { formatCurrency } from '../lib/format';
import IndividualDependent from './individual-dependent';
import './dependents-list.css';

import type { Dependent } from '../types/people';

type Props = {
    dependents: Dependent[],
    onChange: (_: Dependent[]) => void,
};

const DependentsList = ({ dependents, onChange }: Props) => {
    const addDependent = () => {
        const newDependents = [...dependents, { name: '' }];
        onChange(newDependents);
    };

    const renameDependent = (index: number, newName: string) => {
        const newDependents = [...dependents];
        newDependents[index].name = newName.trim();
        onChange(newDependents);
    };

    const removeDependent = (index: number) => {
        const newDependents = [...dependents];
        newDependents.splice(index, 1);
        onChange(newDependents);
    };

    const totalDependentsCost = calculateTotalDependentsCost(dependents);

    return <>
        <h3>Dependents</h3>
        <table>
            {!dependents.length ? null : <tr>
                <td>Name</td>
                <td>Cost</td>
            </tr>}
        
            {dependents.map((dependent, i) => (
                <IndividualDependent
                    index={i}
                    dependent={dependent}
                    onRemove={removeDependent}
                    onChangeName={renameDependent}
                />)
            )}
        </table>

        <button className='add-button' onClick={addDependent}>
            Add dependent
        </button>

        <div>Total dependents benefits cost: {formatCurrency(totalDependentsCost)}</div>
    </>
};

export default DependentsList;
