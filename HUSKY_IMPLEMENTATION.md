# Assignment 13 - Husky Pre-commit Hook Implementation

## Overview
Implementation of Husky pre-commit hooks as required by Assignment 13 to ensure code quality before submissions.

## Pre-commit Checks Configuration
The following checks run before every commit:

### 1. Prettier Check ✅
```json
"*.{js,jsx,ts,tsx,css,md,json}": ["prettier --write"]
```
- Automatic code formatting
- Consistent code style enforcement
- Based on Assignment 13 requirements

### 2. ESLint Check ✅
```json
"*.{js,jsx,ts,tsx}": ["eslint --fix"]
```
- Code linting and quality validation
- Automatic fixing of common issues
- Error prevention before commit

### 3. Test Execution ✅
```json
"src/**/*.{js,jsx,ts,tsx}": ["npm run test:ci"]
```
- All tests must pass before commit
- Prevents broken code submissions
- Ensures code reliability

## Implementation Details
- **Hook Location**: `.husky/pre-commit`
- **Configuration**: `lint-staged` in package.json
- **Trigger**: Automatically runs on `git commit`
- **Bypass Prevention**: GitHub Actions validates if hooks are bypassed

## Reference Articles Used
- "How to Add Commit Hooks to Git with Husky to Automate Code Tasks"
- Assignment 13 detailed instructions
