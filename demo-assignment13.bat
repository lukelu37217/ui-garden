@echo off
REM Assignment 13 Demo Script
REM Lu Luke - UI Component Library with CI/CD

echo ================================
echo Assignment 13 Demo - Lu Luke
echo ================================
echo.

echo [1/6] Checking project structure...
if exist package.json (
    echo ✓ package.json found
) else (
    echo ✗ package.json missing
    exit /b 1
)

if exist .husky\pre-commit (
    echo ✓ Husky pre-commit hook found
) else (
    echo ✗ Husky pre-commit hook missing
    exit /b 1
)

if exist .github\workflows\ci.yml (
    echo ✓ GitHub Actions CI/CD found
) else (
    echo ✗ GitHub Actions CI/CD missing
    exit /b 1
)

if exist Dockerfile (
    echo ✓ Dockerfile found
) else (
    echo ✗ Dockerfile missing
    exit /b 1
)

echo.
echo [2/6] Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ✗ npm install failed
    exit /b 1
)
echo ✓ Dependencies installed

echo.
echo [3/6] Running code quality checks...
echo Running Prettier check...
call npm run format:check
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Prettier check failed
    exit /b 1
)
echo ✓ Prettier check passed

echo Running ESLint...
call npm run lint
if %ERRORLEVEL% NEQ 0 (
    echo ✗ ESLint check failed
    exit /b 1
)
echo ✓ ESLint check passed

echo Running tests...
call npm run test:ci
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Tests failed
    exit /b 1
)
echo ✓ All tests passed

echo.
echo [4/6] Building React application...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Build failed
    exit /b 1
)
echo ✓ React build successful

echo.
echo [5/6] Building Docker image...
docker build -t lu_luke_coding_assignment13 .
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Docker build failed
    echo Make sure Docker Desktop is installed and running
    exit /b 1
)
echo ✓ Docker image built successfully

echo.
echo [6/6] Starting Docker container...
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Docker container failed to start
    exit /b 1
)
echo ✓ Docker container started

echo.
echo ================================
echo Demo completed successfully!
echo ================================
echo.
echo Your application is now running at:
echo - http://localhost:8018
echo - http://127.0.0.1:8018
echo.
echo To view container status: docker ps
echo To view logs: docker logs lu_luke_coding_assignment13
echo To stop container: docker stop lu_luke_coding_assignment13
echo To remove container: docker rm lu_luke_coding_assignment13
echo.
pause
