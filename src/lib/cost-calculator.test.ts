import { describe, expect, it } from 'vitest';

import {
    calculateIndividualDependentCost,
    calculateIndividualEmployeeCost,
} from './cost-calculator';

describe('calculateIndividualEmployeeCost', () => {
    it('should return full amount if employee name does not start with "a"', () =>{
        const testEmployee = { name: 'Bill', dependents: [] };

        const result = calculateIndividualEmployeeCost(testEmployee);

        expect(result).toBeCloseTo(38.46, 2);
    });

    it('should return discounted amount if employee name starts with "a"', () =>{
        const testEmployee = { name: 'alex', dependents: [] };

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