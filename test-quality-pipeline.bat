@echo off
echo =================================
echo Testing Code Quality Pipeline
echo =================================

echo.
echo 1. Running Prettier check...
call npm run format:check
if %errorlevel% neq 0 (
    echo FAILED: Prettier check failed
    exit /b 1
)
echo SUCCESS: Prettier check passed

echo.
echo 2. Running ESLint...
call npm run lint
if %errorlevel% neq 0 (
    echo FAILED: ESLint check failed
    exit /b 1
)
echo SUCCESS: ESLint check passed

echo.
echo 3. Running tests...
call npm run test:ci
if %errorlevel% neq 0 (
    echo FAILED: Tests failed
    exit /b 1
)
echo SUCCESS: All tests passed

echo.
echo 4. Building application...
call npm run build
if %errorlevel% neq 0 (
    echo FAILED: Build failed
    exit /b 1
)
echo SUCCESS: Build completed

echo.
echo =================================
echo All quality checks passed!
echo Ready for deployment!
echo =================================
