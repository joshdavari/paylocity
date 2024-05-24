# Paylocity Benefits Deduction Calculator

## Assumptions
- Users will be authenticated (need to make sure they can only retrieve their own data) 
- Since requirements didn't specify if first or last name needs to start with 'A' for 
discount to apply, just collect whole name as a single value and check first character
- Use case-insensitive check for names that start with 'A'
