import { Dependent } from '../types/people';
import { calculateIndividualDependentCost } from '../lib/cost-calculator';
import { formatCurrency } from '../lib/format';

type Props = { dependent: Dependent };

const DependentCost = ({ dependent }: Props) => {
    const cost = calculateIndividualDependentCost(dependent);

    return <tr>
        <td>
            <input placeholder='Name' value={dependent.name} />
        </td>
    
        <td>{formatCurrency(cost)}</td>

        <td>
            <button>Remove</button>
        </td>
    </tr>
};

export default DependentCost;
