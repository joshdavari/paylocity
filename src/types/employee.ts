type Person = { name: string };

export type Employee = Person & {
    dependents: Person[]
};
