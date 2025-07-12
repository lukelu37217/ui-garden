# UI Component Library with CI/CD - Coding Assignment 13

## Author
Lu Luke

## Description

This project is a React + TypeScript Component Library with integrated code quality checks and CI/CD pipeline. It includes code quality tools like ESLint, Prettier, and Husky for pre-commit hooks, ensuring consistent code quality.

### Components Included:
- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table (including TableHeader, TableRow, TableCell, TableFooter)

All components:
- Are responsive
- Have disabled states
- Have Storybook stories
- Have at least 2 tests each
- Pass code quality checks (ESLint + Prettier)

## Code Quality Features

### Pre-commit Hooks (Husky)
- **Prettier**: Automatic code formatting
- **ESLint**: Code linting and quality checks
- **Tests**: All tests must pass before commit

### CI/CD Pipeline (GitHub Actions)
- Runs on every push and pull request
- Executes the same quality checks as pre-commit hooks
- Builds and tests the Docker container
- Ensures consistent code quality across the team

## How to run locally

### Prerequisites
```bash
npm install
```

### Development
```bash
# Start Storybook
npm run storybook
# Visit: http://localhost:6006

# Start React app
npm start
# Visit: http://localhost:3000
```

### Code Quality Commands
```bash
# Run linting
npm run lint
npm run lint:fix

# Run formatting
npm run format
npm run format:check

# Run tests
npm test
npm run test:ci
```

### Pre-commit Setup
The pre-commit hooks are automatically set up after `npm install`. They will:
1. Format your code with Prettier
2. Lint your code with ESLint
3. Run tests to ensure nothing is broken

## Docker Deployment

### Build and run with Docker

Build the Docker image:
```bash
docker build -t Lu_Luke_coding_assignment13 .
```

Run the container on port 8018:
```bash
docker run -d -p 8018:8018 --name Lu_Luke_coding_assignment13 Lu_Luke_coding_assignment13
```

### Access the Application
Once the container is running, visit:
```
http://localhost:8018
http://127.0.0.1:8018
```

### Container Details
- **Container Name**: `Lu_Luke_coding_assignment13`
- **Working Directory**: `/Lu_Luke_ui_garden_build_checks`
- **Port**: 8018
- **Quality Checks**: The Docker build process runs ESLint, Prettier, and all tests before creating the production build

### Stop and Clean Up
```bash
# Stop the container
docker stop Lu_Luke_coding_assignment13

# Remove the container
docker rm Lu_Luke_coding_assignment13

# Remove the image (optional)
docker rmi Lu_Luke_coding_assignment13
```

## CI/CD Pipeline

This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. **Quality Checks**: Runs on Node.js 18.x and 20.x
   - Prettier formatting check
   - ESLint code quality check
   - Complete test suite with coverage
   - Production build verification

2. **Docker Build**: (on main/master branch only)
   - Builds the Docker image
   - Tests the container functionality
   - Ensures the application is accessible on port 8018

### Workflow Triggers
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main`, `master`, or `develop` branches

## Development Workflow

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Create a feature branch**: `git checkout -b feature/your-feature`
4. **Make changes** (pre-commit hooks will automatically run)
5. **Commit your changes**: `git commit -m "Your commit message"`
6. **Push to GitHub**: `git push origin feature/your-feature`
7. **Create a Pull Request** (CI pipeline will run automatically)

## Project Structure
```
ui-garden/
├── .github/workflows/     # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── src/
│   ├── components/       # UI components
│   └── stories/         # Storybook stories
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── Dockerfile           # Docker configuration
├── nginx.conf           # Nginx configuration for port 8018
└── package.json         # Dependencies and scripts
```

## Quality Standards

This project enforces the following quality standards:

- **Code Formatting**: Prettier with consistent style rules
- **Code Quality**: ESLint with TypeScript and React rules
- **Testing**: All components must have tests with coverage
- **Git Hooks**: Pre-commit checks prevent poor quality commits
- **CI/CD**: Automated quality checks on every push/PR
- **Docker**: Production-ready containerized deployment

### Build docker image

```bash
docker build -t ui-garden .
```

### Run docker container

To run the container with the required name and port mapping, use:

```bash
docker run -d --name Lu_Luke_coding_assignment12 -p 8083:80 ui-garden
```

Then visit:

```
http://localhost:8083
```

---

## Docker Compose (optional)

If you prefer using docker-compose, you can create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  ui-garden:
    build: .
    container_name: Lu_Luke_coding_assignment12
    ports:
      - "8083:80"
```

Run with:

```bash
docker-compose up --build
```

---

## Deployment

The container serves a production build from the Create React App build folder using Nginx.

---


