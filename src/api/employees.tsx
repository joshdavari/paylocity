import { Employee } from '../types/people';

let savedEmployee: Employee = {
    name: 'John Doe',
    paycheckAmount: 2000,
    dependents: [
        { name: 'Aaron Aaronsen' },
        { name: 'Baron Baronsen' },
    ],
};

export const getEmployee = async (): Promise<Employee> => {
    console.log('GET /employees/current'); 
    return savedEmployee;
};

export const saveEmployee = async (employee: Employee): Promise<void> => {
    console.log('PUT /employees/current'); 
    savedEmployee = employee;
}
