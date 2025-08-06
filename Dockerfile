# Build stage
FROM node:20-alpine AS build

WORKDIR /Lu_Luke_ui_garden_build_checks

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
WORKDIR /Lu_Luke_ui_garden_build_checks

# Copy the build files to nginx html directory
COPY --from=build /Lu_Luke_ui_garden_build_checks/build /usr/share/nginx/html

# Create custom nginx config for port 8018
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8018 as required
EXPOSE 8018

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8018/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
