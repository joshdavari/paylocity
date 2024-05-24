import { expect, test } from 'vitest'
import { getEmployee, saveEmployee } from './employees'

// note: if we were calling an actual API I would unit test the get and save
// functions separately, with the API requests mocked  
test('getEmployee should return employee saved with saveEmployee', async () => {
    const testEmployee = {
        name: 'John Doe',
        paycheckAmount: 100,
        dependents: [{ name: 'Jane Doe' }],
    };

    await saveEmployee(testEmployee);
    const returnedEmployee = await getEmployee();

    expect(returnedEmployee).toBe(testEmployee)
})