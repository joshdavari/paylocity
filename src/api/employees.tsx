import { Employee } from '../types/people';

let savedEmployee: Employee = {
    name: 'Jill Jacobs',
    paycheckAmount: 2000,
    dependents: [
        { name: 'Alex Alexo' },
        { name: 'Baron Baronsen' },
    ],
};

export const getEmployee = async (): Promise<Employee> => {
    console.log('GET /employees/current'); 
    return savedEmployee;
};

export const saveEmployee = async (employee: Employee): Promise<void> => {
    console.log('PUT /employees/current', JSON.stringify(employee)); 
    savedEmployee = employee;
}
