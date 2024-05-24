import { expect, test } from 'vitest'
import { getEmployee, saveEmployee } from './employees'

// note: if we were calling an actual API I would unit test the get and save
// functions separately, with the API requests mocked  
test('getEmployee should return employee saved with saveEmployee', () => {
    const testEmployee = {
        name: 'John Doe',
        dependents: [{ name: 'Jane Doe' }],
    };

    saveEmployee(testEmployee);

    expect(getEmployee()).toBe(testEmployee)
})