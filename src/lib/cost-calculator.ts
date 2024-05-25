import { Dependent, Employee, Person } from '../types/people';

const paychecksPerYear = 26;

// in reality we'd probably get these costs from an API
const annualEmployeeBenefitsCost = 1000;
const annualDependentBenefitsCost = 500;

const getDiscountRate = ({ name }: Person): number => {
    if (name.toLocaleUpperCase().startsWith('A')) return 0.9;
    return 1;
};

const calculateIndividualCostPerPaycheck = (annualCost: number, person: Person): number => {
    const normalCost = annualCost / paychecksPerYear;
    const discountRate = getDiscountRate(person);
    return normalCost * discountRate;
};

export const calculateIndividualEmployeeCost = (employee: Employee): number => {
    return calculateIndividualCostPerPaycheck(annualEmployeeBenefitsCost, employee);
};

export const calculateIndividualDependentCost = (dependent: Dependent): number => {
    return calculateIndividualCostPerPaycheck(annualDependentBenefitsCost, dependent);
};

export const calculateTotalDependentsCost = (dependents: Dependent[]): number => {
    return dependents
        .map(calculateIndividualDependentCost)
        .reduce((sum, cost) => sum + cost, 0);
};

export const calculateTotalBenefitsCost = (employee: Employee): number => {
    const employeeCost = calculateIndividualEmployeeCost(employee);
    const dependentsCost = calculateTotalDependentsCost(employee.dependents);
    return employeeCost + dependentsCost;
};
