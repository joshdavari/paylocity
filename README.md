# Paylocity Benefits Deduction Calculator

## Prerequisites

Node v20

## Running Locally

1. Install dependencies (`npm i`)
1. Either run in dev mode with HMR (`npm run dev`), or build (`npm run build`) and preview (`npm run preview`)
1. In a browser, open the URL displayed in the terminal output (`http://localhost:####`) to launch the application

## Implementation Notes
I would typically use a state management framework like Redux, but I thought that might be excessive
for this exercise. Instead, I just passed functions for updating state to child components.

I would also add unit tests for the React components using React Testing Library or something similar.

## Assumptions
- Since requirements didn't specify if first or last name needs to start with 'A' for 
discount to apply, just collect whole name as a single value and check first character
(after trimming whitespace).
- Use case-insensitive check for names that start with 'A'.
- The requirements say to store data in memory, but also that changes should be reflected on future page loads.
I interpreted the latter requirement to mean "if we were actually saving to an API, the changes would persist".
