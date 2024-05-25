import { describe, expect, it } from 'vitest';

import {
    calculateIndividualDependentCost,
    calculateIndividualEmployeeCost,
    calculateTotalBenefitsCost,
    calculateTotalDependentsCost,
} from './cost-calculator';

describe('calculateIndividualEmployeeCost', () => {
    it('should return full amount if employee name does not start with "a"', () =>{
        const testEmployee = { name: 'Bill', paycheckAmount: 0, dependents: [] };

        const result = calculateIndividualEmployeeCost(testEmployee);

        expect(result).toBeCloseTo(38.46, 2);
    });

    it('should return discounted amount if employee name starts with "a"', () =>{
        const testEmployee = { name: 'alex', paycheckAmount: 0, dependents: [] };

        const result = calculateIndividualEmployeeCost(testEmployee);

        expect(result).toBeCloseTo(34.62, 2);
    });
});

describe('calculateIndividualDependentCost', () => {
    it('should return full amount if dependent name does not start with "a"', () =>{
        const testDependent = { name: 'Bill' };

        const result = calculateIndividualDependentCost(testDependent);

        expect(result).toBeCloseTo(19.23, 2);
    });

    it('should return discounted amount if dependent name starts with "a"', () =>{
        const testDependent = { name: 'albert' };

        const result = calculateIndividualDependentCost(testDependent);

        expect(result).toBeCloseTo(17.31, 2);
    });
});

describe('calculateTotalDependentsCost', () => {
    it('should return sum of individual dependent costs', () =>{
        const testDependents = [{ name: 'alex' }, { name: 'kris' }];

        const result = calculateTotalDependentsCost(testDependents);

        expect(result).toBeCloseTo(36.54, 2);
    });
});

describe('calculateTotalBenefitsCost', () => {
    it('should return sum of individual dependent costs', () =>{
        const testEmployee = {
            name: 'jane',
            paycheckAmount: 0,
            dependents: [{ name: 'alex' }, { name: 'kris' }]
        };

        const result = calculateTotalBenefitsCost(testEmployee);

        expect(result).toBeCloseTo(75, 2);
    });
});
