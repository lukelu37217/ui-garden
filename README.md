# Assignment 14: Portfolio Website using Component Library

**Student:** Luke Lu  
**Course:** Coding Assignment 14 - Building a Portfolio Website  
**GitHub Repository:** https://github.com/lukelu37217/ui-garden  
**Container Name:** lu_luke_coding_assignment14  
**Port:** 5575 (localhost:5575)

## 🚀 Quick Start Instructions

### Prerequisites
- Docker installed on your system
- Port 5575 available
- Git (for cloning repository)

### Running the Application

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/lukelu37217/ui-garden.git
   cd ui-garden
   ```

2. **Build and Run with Docker:**
   ```bash
   # Stop any existing container
   docker rm -f lu_luke_coding_assignment14

   # Build the Docker image
   docker build -t lu_luke_coding_assignment14 .

   # Run the container on port 5575
   docker run -d -p 5575:5575 --name lu_luke_coding_assignment14 lu_luke_coding_assignment14
   ```

3. **Access the Portfolio:**
   - Open your browser and navigate to: `http://localhost:5575`
   - Or: `http://127.0.0.1:5575`

4. **Stop the Application:**
   ```bash
   docker stop lu_luke_coding_assignment14
   ```

## 📋 Assignment Requirements Fulfilled

### ✅ Complete Submission Requirements
- **Dockerfile** ✅ - Multi-stage production build container
- **README.md** ✅ - This comprehensive setup guide
- **GitHub Repository** ✅ - Working link: https://github.com/lukelu37217/ui-garden

### ✅ CI/CD Pipeline Evidence (Level 4 - 5 Points)
- **Prettier Implementation** ✅ - Automated code formatting with pre-commit hooks
- **ESLint Implementation** ✅ - Code quality enforcement in GitHub Actions
- **Testing Pipeline** ✅ - Jest test suite with coverage reporting
- **GitHub Actions** ✅ - Complete CI/CD workflow (`.github/workflows/ci-cd-pipeline.yml`)
- **Pipeline Documentation** ✅ - See `PIPELINE_EVIDENCE.md`

### Portfolio Sections Implemented

✅ **Basic Information** - Personal introduction and professional summary  
✅ **Work Projects** - Featured development projects with:
   - Title and descriptions
   - Project images  
   - Links to repositories/demos
   - Technology stacks used

✅ **Technical Skills** - Comprehensive skill showcase including:
   - Frontend Development (React, TypeScript, HTML5, CSS3)
   - Backend Development (Node.js, Express, APIs)
   - DevOps & Tools (Docker, Git, CI/CD)

✅ **Resources** - Curated development resources with:
   - Title and descriptions
   - Images/Icons
   - Summary descriptions
   - External links

### Docker Configuration

✅ **Container Name:** `lu_luke_coding_assignment14` (as required)  
✅ **Working Directory:** `/lu_luke_final_site` (as required)  
✅ **Port:** `5575` (maps to localhost:5575 as required)  
✅ **Production Build:** Optimized React production build served by Nginx

### CI/CD Pipeline Implementation

✅ **ESLint:** Code quality and linting checks  
✅ **Prettier:** Automated code formatting  
✅ **Tests:** Jest test suite with coverage reporting  
✅ **GitHub Actions:** Automated pipeline for quality checks and builds

## Technology Stack

- **Frontend:** React 19.1.0 with TypeScript
- **Styling:** Styled Components + Custom CSS for responsive design
- **Build Tool:** Create React App with production optimizations
- **Containerization:** Docker multi-stage build with Nginx
- **Quality Tools:** ESLint, Prettier, Husky, Jest testing
- **CI/CD:** GitHub Actions for automated testing and deployment

## Installation & Setup

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/lukelu37217/ui-garden.git
cd ui-garden

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

### Docker Production Build

```bash
# Build the Docker container
docker build -t lu_luke_coding_assignment14 .

# Run the container on port 5575
docker run -p 5575:5575 --name lu_luke_coding_assignment14 lu_luke_coding_assignment14

# Access the portfolio at http://localhost:5575
```

### Alternative Docker Run Command

```bash
# Run with port mapping
docker run -d -p 5575:5575 --name lu_luke_coding_assignment14 lu_luke_coding_assignment14
```

## Project Structure

```
ui-garden/
├── public/
│   ├── images/               # Portfolio images and assets
│   └── index.html           # HTML template
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── HeroImage/
│   │   ├── Text/
│   │   └── ...
│   ├── App.tsx              # Main portfolio application
│   └── index.tsx            # Application entry point
├── Dockerfile               # Multi-stage Docker build
├── nginx.conf              # Nginx production configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Component Library Usage

The portfolio leverages the custom component library built in Assignment 13:

- **Card Components:** Project showcases and skill presentations
- **Button Components:** Navigation and call-to-action elements
- **Text Components:** Consistent typography throughout
- **HeroImage Component:** Landing page banner with background image
- **Styled Components:** Custom responsive layouts and styling

##  Design Features

- **Responsive Design:** Mobile-first approach with CSS Grid and Flexbox
- **Modern UI:** Clean, professional design with smooth transitions
- **Accessibility:** Semantic HTML and proper ARIA labels
- **Performance:** Optimized images and production build
- **SEO-Friendly:** Proper meta tags and semantic structure

##  Available Scripts

```bash
# Development
npm start              # Start development server
npm test               # Run test suite
npm run build          # Create production build

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run format         # Format code with Prettier
npm run format:check   # Check formatting

# Testing
npm run test:ci        # Run tests with coverage for CI

# Storybook
npm run storybook      # Start Storybook component explorer
npm run build-storybook # Build Storybook for deployment
```

## 🚦 CI/CD Pipeline

The project includes automated workflows:

- **GitHub Actions:** Automated testing and building
- **Prettier:** Code formatting checks
- **ESLint:** Code quality and standards enforcement
- **Husky:** Git hooks for pre-commit quality checks

## Portfolio Highlights

### Technical Projects
1. **UI Component Library** - React/TypeScript component system
2. **E-Commerce Platform** - Full-stack web application
3. **Task Management App** - Real-time collaborative tool

### Skills Demonstrated
- Modern React development with hooks and functional components
- TypeScript for type safety and better developer experience
- Styled Components for maintainable CSS-in-JS
- Docker containerization for consistent deployments
- Git workflow and version control best practices

##  Links & Resources

- **GitHub Repository:** [https://github.com/lukelu37217/ui-garden](https://github.com/lukelu37217/ui-garden)
- **Portfolio Website:** http://localhost:5575 (when running Docker container)
- **Component Storybook:** Available via `npm run storybook`

## Assignment Submission

This repository contains:
- Complete Dockerfile with production build configuration
- README.md with comprehensive setup instructions
- Working portfolio website accessible at localhost:5575
- All required portfolio sections implemented
- Professional design and responsive layout
- Evidence of CI/CD pipeline implementation

## Developer Information

**Luke Lu**  
Full Stack Developer & UI/UX Enthusiast  
[GitHub](https://github.com/lukelu37217) | [Portfolio](http://localhost:5575)

---

*This portfolio demonstrates modern web development practices and serves as Assignment 14 for the coding course, building upon the component library foundation from Assignment 13.*


