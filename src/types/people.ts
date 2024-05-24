export type Person = { name: string };

export type Dependent = Person;

export type Employee = Person & {
    paycheckAmount: number,
    dependents: Person[]
};
