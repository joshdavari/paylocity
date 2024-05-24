import { useEffect, useState } from 'react';

import { getEmployee, saveEmployee } from '../api/employees';
import { calculateIndividualEmployeeCost } from '../lib/cost-calculator';
import { formatCurrency } from '../lib/format';
import DependentsList from './dependents-list';
import './employee-benefits.css';

import type { Employee } from '../types/people';

const EmployeeBenefits = () => {
    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        getEmployee().then(setEmployee);
    }, []);
    
    if (!employee) return <div>Please wait...</div>;

    const individualEmployeeCost = calculateIndividualEmployeeCost(employee);

    const changeEmployeeName = (name: string) => setEmployee({ ...employee, name });
    const saveChanges = () => saveEmployee(employee);

    return <>
        <div>
            <label>
                Employee name:{' '}
                <input
                    onChange={e => changeEmployeeName(e.target.value)}
                    placeholder='Name'
                    value={employee.name}
                />
            </label>
        </div>
    
        <div>Paycheck amount: {formatCurrency(employee.paycheckAmount)}</div>
        <div>Employee benefits cost: {formatCurrency(individualEmployeeCost)}</div>

        <DependentsList dependents={employee.dependents} />

        <div>Total benefits cost: $xx.xx</div>
        <div>Paycheck amount after deduction: $x,xxx.xx</div>

        <button className='save-button' onClick={saveChanges}>
            Save changes
        </button>
    </>
};

export default EmployeeBenefits;
