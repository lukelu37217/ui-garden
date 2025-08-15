# Assignment 14 - Portfolio Website using Component Library
# DockerFile builds container that hosts production build of create react app
# Container name: lu_luke_coding_assignment14  
# Working directory: lu_luke_final_site
# Hosts site on localhost:5575

# Build stage
FROM node:20-alpine AS build

WORKDIR /lu_luke_final_site

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for quality checks)
RUN npm ci

# Copy source code
COPY . .

# Build the application with increased memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# Production stage
FROM nginx:alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set working directory as per requirements
WORKDIR /lu_luke_final_site

# Copy the build files to nginx html directory
COPY --from=build /lu_luke_final_site/build /usr/share/nginx/html

# Create custom nginx config for port 5575
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 5575 as required
EXPOSE 5575

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5575/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
