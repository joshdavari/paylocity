import { Employee } from '../types/employee';

let savedEmployee: Employee = { name: '', dependents: [] };

export const getEmployee = (): Employee => {
    console.log('GET /employees/current'); 
    return savedEmployee;
};

export const saveEmployee = (employee: Employee): void => {
    console.log('PUT /employees/current'); 
    savedEmployee = employee;
}
