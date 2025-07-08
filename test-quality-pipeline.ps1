Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Testing Code Quality Pipeline" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

Write-Host ""
Write-Host "1. Running Prettier check..." -ForegroundColor Yellow
npm run format:check
if ($LASTEXITCODE -ne 0) {
    Write-Host "FAILED: Prettier check failed" -ForegroundColor Red
    exit 1
}
Write-Host "SUCCESS: Prettier check passed" -ForegroundColor Green

Write-Host ""
Write-Host "2. Running ESLint..." -ForegroundColor Yellow
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "FAILED: ESLint check failed" -ForegroundColor Red
    exit 1
}
Write-Host "SUCCESS: ESLint check passed" -ForegroundColor Green

Write-Host ""
Write-Host "3. Running tests..." -ForegroundColor Yellow
npm run test:ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "FAILED: Tests failed" -ForegroundColor Red
    exit 1
}
Write-Host "SUCCESS: All tests passed" -ForegroundColor Green

Write-Host ""
Write-Host "4. Building application..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "FAILED: Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "SUCCESS: Build completed" -ForegroundColor Green

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "All quality checks passed!" -ForegroundColor Cyan
Write-Host "Ready for deployment!" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
