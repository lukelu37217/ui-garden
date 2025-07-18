# Assignment 13 Demo Script - PowerShell Version
# Lu Luke - UI Component Library with CI/CD

Write-Host "================================" -ForegroundColor Blue
Write-Host "Assignment 13 Demo - Lu Luke" -ForegroundColor Blue  
Write-Host "================================" -ForegroundColor Blue
Write-Host ""

Write-Host "[1/6] Checking project structure..." -ForegroundColor Yellow

$checks = @(
    @{File="package.json"; Name="package.json"},
    @{File=".husky\pre-commit"; Name="Husky pre-commit hook"},
    @{File=".github\workflows\ci.yml"; Name="GitHub Actions CI/CD"},
    @{File="Dockerfile"; Name="Dockerfile"}
)

foreach ($check in $checks) {
    if (Test-Path $check.File) {
        Write-Host "✓ $($check.Name) found" -ForegroundColor Green
    } else {
        Write-Host "✗ $($check.Name) missing" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "[2/6] Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ npm install failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "[3/6] Running code quality checks..." -ForegroundColor Yellow

Write-Host "Running Prettier check..." -ForegroundColor Cyan
npm run format:check
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Prettier check failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Prettier check passed" -ForegroundColor Green

Write-Host "Running ESLint..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ ESLint check failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ ESLint check passed" -ForegroundColor Green

Write-Host "Running tests..." -ForegroundColor Cyan
npm run test:ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Tests failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ All tests passed" -ForegroundColor Green

Write-Host ""
Write-Host "[4/6] Building React application..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ React build successful" -ForegroundColor Green

Write-Host ""
Write-Host "[5/6] Building Docker image..." -ForegroundColor Yellow
docker build -t lu_luke_coding_assignment13 .
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Docker build failed" -ForegroundColor Red
    Write-Host "Make sure Docker Desktop is installed and running" -ForegroundColor Yellow
    exit 1
}
Write-Host "✓ Docker image built successfully" -ForegroundColor Green

Write-Host ""
Write-Host "[6/6] Starting Docker container..." -ForegroundColor Yellow
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Docker container failed to start" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Docker container started" -ForegroundColor Green

Write-Host ""
Write-Host "================================" -ForegroundColor Blue
Write-Host "Demo completed successfully!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Blue
Write-Host ""
Write-Host "Your application is now running at:" -ForegroundColor Yellow
Write-Host "- http://localhost:8018" -ForegroundColor Cyan
Write-Host "- http://127.0.0.1:8018" -ForegroundColor Cyan
Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Yellow
Write-Host "To view container status: docker ps" -ForegroundColor White
Write-Host "To view logs: docker logs lu_luke_coding_assignment13" -ForegroundColor White
Write-Host "To stop container: docker stop lu_luke_coding_assignment13" -ForegroundColor White
Write-Host "To remove container: docker rm lu_luke_coding_assignment13" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to continue..."
