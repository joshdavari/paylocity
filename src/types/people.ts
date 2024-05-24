export type Person = { name: string };

export type Dependent = Person;

export type Employee = Person & {
    dependents: Person[]
};
