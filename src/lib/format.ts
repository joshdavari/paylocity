export const formatCurrency = (amount: number): string => (
    amount.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
);
