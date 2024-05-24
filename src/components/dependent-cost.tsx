import { Dependent } from '../types/people';
import { calculateIndividualDependentCost } from '../lib/cost-calculator';

type Props = { dependent: Dependent };

const DependentCost = ({ dependent }: Props) => {
    const cost = calculateIndividualDependentCost(dependent);

    return <tr>
        <td>
            <input placeholder='Name' value={dependent.name} />
        </td>
    
        <td>${cost}</td>
    </tr>
};

export default DependentCost;
