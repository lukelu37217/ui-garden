@echo off
echo ===================================================
echo Assignment 13 - Complete Demo for Teacher
echo ===================================================
echo.

echo 1. Pre-commit Hook Demo
echo ========================
echo Showing pre-commit hook configuration:
type .husky\pre-commit
echo.
echo Adding test modification to trigger hook...
echo // Test comment for demo >> src/App.tsx
git add src/App.tsx
echo.
echo Attempting commit (will show quality checks):
git commit -m "demo: Test pre-commit hooks"
echo.
echo Restoring original file:
git checkout src/App.tsx
echo.

echo 2. GitHub Actions Demo
echo =======================
echo GitHub Actions workflow configuration:
type .github\workflows\ci.yml
echo.
echo Visit GitHub Actions page:
echo https://github.com/lukelu37217/ui-garden/actions
echo.

echo 3. Docker Deployment Demo
echo ===========================
echo Building Docker image (with quality checks):
docker build -t lu_luke_coding_assignment13 .
echo.
echo Running container on port 8018:
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13
echo.
echo Container is running. Access at:
echo http://localhost:8018
echo.
echo Checking container status:
docker ps
echo.

echo ===================================================
echo Demo Complete! All three requirements demonstrated:
echo 1. ✅ Pre-commit hooks (Prettier, ESLint, Tests)
echo 2. ✅ GitHub Actions CI/CD pipeline  
echo 3. ✅ Docker deployment on port 8018
echo ===================================================
pause
