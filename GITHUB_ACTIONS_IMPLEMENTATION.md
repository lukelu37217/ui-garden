# Assignment 13 - GitHub Actions CI/CD Pipeline

## Overview
Implementation of GitHub Actions workflow to ensure code quality checks run for every submission, fulfilling Assignment 13 requirements.

## Workflow Configuration
**File**: `.github/workflows/ci.yml`

### Triggers
- Every push to main branch
- Every pull request to main branch
- Ensures no bypassing of local pre-commit hooks

### Jobs Configuration

#### 1. Quality Checks Job
```yaml
quality-checks:
  runs-on: ubuntu-latest
  steps:
    - Checkout code
    - Setup Node.js 20.x
    - Install dependencies
    - Run Prettier check
    - Run ESLint validation
    - Execute test suite
    - Generate coverage report
```

#### 2. Docker Verification Job
```yaml
docker-verification:
  runs-on: ubuntu-latest
  steps:
    - Verify Dockerfile syntax
    - Test container build process
    - Validate port 8018 configuration
```

## Assignment 13 Compliance
✅ **Prettier Check**: Ensures code formatting standards
✅ **ESLint Check**: Validates code quality and prevents errors  
✅ **Test Execution**: All tests must pass for successful build
✅ **Build Verification**: Confirms production build succeeds
✅ **Docker Validation**: Verifies container configuration

## Bypass Prevention
If developers bypass local pre-commit hooks:
- GitHub Actions will catch the same issues
- Build will fail with clear error messages
- Notifications sent to repository maintainers
- No broken code reaches main branch

## Reference Implementation
Based on Assignment 13 provided articles:
- "How to build a CI/CD pipeline with GitHub Actions in four simple steps"
- "Build a CI/CD environment with GitHub Actions ESLint Prettier"
