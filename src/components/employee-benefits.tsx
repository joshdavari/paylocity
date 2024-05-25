import { useEffect, useState } from 'react';

import { getEmployee, saveEmployee } from '../api/employees';
import { calculateIndividualEmployeeCost, calculateTotalBenefitsCost } from '../lib/cost-calculator';
import { formatCurrency } from '../lib/format';
import DependentsList from './dependents-list';
import './employee-benefits.css';

import type { Dependent, Employee } from '../types/people';

const EmployeeBenefits = () => {
    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        getEmployee().then(setEmployee);
    }, []);
    
    if (!employee) return <div>Please wait...</div>;

    const individualEmployeeCost = calculateIndividualEmployeeCost(employee);
    const totalBenefitsCost = calculateTotalBenefitsCost(employee);
    const netPaycheckAmount = employee.paycheckAmount - totalBenefitsCost;

    const updateDependents = (dependents: Dependent[]) => {
        setEmployee({ ...employee, dependents });
    };

    const renameEmployee = (newName: string) => setEmployee({ ...employee, name: newName.trim() });
    const saveChanges = () => saveEmployee(employee);

    return <>
        <div>
            <label>
                Employee name:{' '}
                <input
                    onChange={e => renameEmployee(e.target.value)}
                    placeholder='Name'
                    value={employee.name}
                />
            </label>
        </div>
    
        <div>Paycheck amount: {formatCurrency(employee.paycheckAmount)}</div>
        <div>Employee benefits cost: {formatCurrency(individualEmployeeCost)}</div>

        <DependentsList dependents={employee.dependents} onChange={updateDependents} />

        <div>Total benefits cost: {formatCurrency(totalBenefitsCost)}</div>
        <div>Paycheck amount after deduction: {formatCurrency(netPaycheckAmount)}</div>

        <button className='save-button' onClick={saveChanges}>
            Save changes
        </button>
    </>
};

export default EmployeeBenefits;
