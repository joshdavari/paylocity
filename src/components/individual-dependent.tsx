import { Dependent } from '../types/people';
import { calculateIndividualDependentCost } from '../lib/cost-calculator';
import { formatCurrency } from '../lib/format';

type Props = {
    dependent: Dependent,
    index: number,
    onRemove: (index: number) => void,
    onChangeName: (index: number, name: string) => void
};

const IndividualDependent = ({ dependent, index, onChangeName, onRemove }: Props) => {
    const cost = calculateIndividualDependentCost(dependent);

    return <tr>
        <td>
            <input
                placeholder='Name'
                value={dependent.name}
                onChange={e => onChangeName(index, e.target.value)}
            />
        </td>
    
        <td>{formatCurrency(cost)}</td>

        <td>
            <button onClick={() => onRemove(index)}>
                Remove
            </button>
        </td>
    </tr>
};

export default IndividualDependent;
