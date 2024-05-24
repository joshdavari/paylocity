import { describe, expect, it } from 'vitest';

import { formatCurrency } from './format';

describe('formatCurrency', () => {
    it('should format currency rounded to 2 decimal places', () =>{
        const result = formatCurrency(5432.345);

        expect(result).toBe('$5,432.35');
    });
    
    it('should include .00 for whole numbers', () =>{
        const result = formatCurrency(12);

        expect(result).toBe('$12.00');
    });
});
