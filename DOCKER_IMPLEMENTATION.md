# Assignment 13 - Docker Production Build Implementation

## Overview
Docker container implementation as specified in Assignment 13 requirements for hosting the UI Component Library.

## Container Specifications
✅ **Container Name**: `lu_luke_coding_assignment13`
✅ **Working Directory**: `/Lu_Luke_ui_garden_build_checks`  
✅ **Host Port**: `localhost:8018` (127.0.0.1:8018)
✅ **Production Build**: Create React App optimized build

## Multi-stage Build Process

### Stage 1: Build Environment
- **Base Image**: `node:20-alpine`
- **Dependencies**: Full npm install including dev dependencies
- **Code Quality**: Runs Prettier, ESLint, and Tests during build
- **Build Output**: Optimized production bundle

### Stage 2: Production Environment  
- **Base Image**: `nginx:alpine`
- **Configuration**: Custom nginx.conf for SPA routing
- **Port Exposure**: 8018 as required by Assignment 13
- **File Serving**: Static production build files

## Code Quality Integration
The Docker build process ensures:
1. **Prettier Validation**: Code formatting compliance
2. **ESLint Checks**: Code quality and error prevention
3. **Test Execution**: All tests pass before build completion
4. **Build Verification**: Production bundle creates successfully

## Deployment Commands
```bash
# Build container with Assignment 13 name
docker build -t lu_luke_coding_assignment13 .

# Run container on required port
docker run -p 8018:8018 lu_luke_coding_assignment13
```

## Access
- **URL**: http://localhost:8018
- **Alternative**: http://127.0.0.1:8018
- **Content**: UI Component Library production build

## Assignment 13 Compliance
✅ All specification requirements met
✅ Code quality checks integrated
✅ Production build optimization
✅ Proper port configuration
